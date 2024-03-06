using Directory = System.IO.Directory;

namespace CleanArchitecture.Application.Services.Implementations;

public class ProductSearchService : ISearchService<ProductDto>
{
    private const LuceneVersion Version = LuceneVersion.LUCENE_48;

    private static readonly string[] Fields =
    [
        nameof(ProductEntity.Name),
        nameof(ProductEntity.DescriptionEn),
        nameof(ProductEntity.DescriptionUa),
        "CategoryNameUa",
        "CategoryNameEn",
        "CategoryDescriptionUa",
        "CategoryDescriptionEn",
        "BrandName"
    ];

    private readonly SimpleFSDirectory _directory;
    private readonly IProductService _productService;
    private readonly MultiFieldQueryParser _queryParser;
    private readonly IndexWriterConfig _config;

    public ProductSearchService(
        string indexPath,
        IProductService productService
    )
    {
        var analyzer = new StandardAnalyzer(Version);

        _config = new IndexWriterConfig(Version, analyzer);
        _directory = new SimpleFSDirectory(indexPath);
        _productService = productService;
        _queryParser = new MultiFieldQueryParser(Version, Fields, analyzer);
        
        InitialIndex(indexPath).Wait();
    }

    private async Task InitialIndex(string indexPath)
    {
        // index the existing products if there is no cache
        if (!Directory.EnumerateFileSystemEntries(indexPath).IsNullOrEmpty())
            return;
        
        var products = await _productService.Get();
        Index(products);
    }

    private static void IndexCore(IndexWriter writer, ProductDto item)
    {
        writer.AddDocument(new Document
        {
            new StringField(
                nameof(ProductDto.Id),
                item.Id.ToString(),
                Field.Store.YES
            ),
            new StringField(
                nameof(ProductDto.Name),
                item.Name,
                Field.Store.YES
            ),
            new StringField(
                nameof(ProductDto.DescriptionEn),
                item.DescriptionEn,
                Field.Store.YES
            ),
            new StringField(
                nameof(ProductDto.DescriptionUa),
                item.DescriptionUa,
                Field.Store.YES
            ),
            new StringField(
                "CategoryNameUa",
                item.Category.NameUa,
                Field.Store.YES
            ),
            new StringField(
                "CategoryNameEn",
                item.Category.NameEn,
                Field.Store.YES
            ),
            new StringField(
                "CategoryDescriptionUa",
                item.Category.DescriptionUa,
                Field.Store.YES
            ),
            new StringField(
                "CategoryDescriptionEn",
                item.Category.DescriptionEn,
                Field.Store.YES
            ),
            new StringField(
                "BrandName",
                item.Brand.Name,
                Field.Store.YES
            ),
        });
    }
    public void Index(ProductDto item)
    {
        using var writer = new IndexWriter(_directory, _config);
        IndexCore(writer, item);
        writer.Commit();
    }

    public void Index(IEnumerable<ProductDto> items)
    {
        using var writer = new IndexWriter(_directory, _config);
        foreach (var item in items)
            IndexCore(writer, item);
        writer.Commit();
    }
    
    public void Remove(ProductDto dto)
    {
        using var writer = new IndexWriter(_directory, _config);
        var term = new Term(nameof(ProductDto.Id), dto.Id.ToString());
        writer.DeleteDocuments(term);
        writer.Commit();
    }

    // TODO: Verify the implementation
    public async Task<PagedListInfo<ProductDto>> Search(
        string searchTerm,
        int pageNumber = 1,
        int pageSize = 10
    )
    {
        using var directoryReader = DirectoryReader.Open(_directory);
        IndexSearcher searcher = new(directoryReader);
        var query = _queryParser.Parse(searchTerm);

        // Create a TotalHitCountCollector instance
        var totalCntCollector = new TotalHitCountCollector();
        searcher.Search(query, totalCntCollector);
        double totalHits = totalCntCollector.TotalHits;

        // Perform the search of preceding results with the collector
        int from = (pageNumber - 1) * pageSize;
        var after = from > 0
            ? searcher.Search(query, from).ScoreDocs.Last()
            : null;

        // Retrieve the necessary docs
        var collector = TopScoreDocCollector.Create(pageSize, after, true);
        searcher.Search(query, collector);
        var hits = collector.GetTopDocs().ScoreDocs;

        List<ProductDto> prods = [];
        foreach (var hit in hits)
        {
            var document = searcher.Doc(hit.Doc);
            var dto = await _productService.GetById(
                document.GetField(nameof(ProductEntity.Id)).GetInt64Value()
                ?? 0
            );
            if (dto is not null)
                prods.Add(dto);
        }

        int totalPages = Convert.ToInt32(Math.Ceiling(totalHits / pageSize));
        return new PagedListInfo<ProductDto>
        (
            Items: prods,
            CurrentPage: pageNumber,
            PageSize: pageSize,
            TotalPages: totalPages,
            TotalCount: prods.Count,
            HasPreviousPage: pageNumber > 1 && totalPages > 1,
            HasNextPage: totalPages > pageNumber
        );
    }
}
