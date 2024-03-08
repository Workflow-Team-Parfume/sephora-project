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
        _queryParser = new MultiFieldQueryParser(Version, Fields, analyzer)
        {
            DefaultOperator = Operator.OR,
            // for wildcard search (slow)
            // AllowLeadingWildcard = true 
        };

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

    private static Document IndexItem(ProductDto item) =>
    [
        new StringField(
            nameof(ProductDto.Id),
            item.Id.ToString(),
            Field.Store.YES
        ),

        new TextField(
            nameof(ProductDto.Name),
            item.Name,
            Field.Store.YES
        ),

        new TextField(
            nameof(ProductDto.DescriptionEn),
            item.DescriptionEn,
            Field.Store.YES
        ),

        new TextField(
            nameof(ProductDto.DescriptionUa),
            item.DescriptionUa,
            Field.Store.YES
        ),

        new TextField(
            "CategoryNameUa",
            item.Category.NameUa,
            Field.Store.YES
        ),

        new TextField(
            "CategoryNameEn",
            item.Category.NameEn,
            Field.Store.YES
        ),

        new TextField(
            "CategoryDescriptionUa",
            item.Category.DescriptionUa,
            Field.Store.YES
        ),

        new TextField(
            "CategoryDescriptionEn",
            item.Category.DescriptionEn,
            Field.Store.YES
        ),

        new TextField(
            "BrandName",
            item.Brand.Name,
            Field.Store.YES
        )
    ];

    public void Index(ProductDto item)
    {
        using var writer = new IndexWriter(_directory, _config);
        writer.AddDocument(IndexItem(item));
        writer.Commit();
    }

    public void Index(IEnumerable<ProductDto> items)
    {
        using var writer = new IndexWriter(_directory, _config);
        foreach (var item in items)
        {
            Document doc = IndexItem(item);
            writer.AddDocument(doc);
        }

        writer.Commit();
    }

    public void Remove(ProductDto dto)
    {
        using var writer = new IndexWriter(_directory, _config);
        var term = new Term(nameof(ProductDto.Id), dto.Id.ToString());
        writer.DeleteDocuments(term);
        writer.Commit();
    }

    public async Task<PagedListInfo<ProductDto>> Search(
        string searchTerm,
        int pageNumber = 1,
        int pageSize = 10
    )
    {
        // Validate the input
        if (pageNumber < 1)
            throw new ArgumentException("Invalid page number");
        
        if (pageSize < 1)
            throw new ArgumentException("Invalid page size");
        
        if (string.IsNullOrWhiteSpace(searchTerm))
            throw new ArgumentException("Search term is null or empty");
        
        // Open the directory, create a searcher and a query
        using var directoryReader = DirectoryReader.Open(_directory);
        IndexSearcher searcher = new(directoryReader);
        var query = _queryParser.Parse($"{searchTerm}~2 OR {searchTerm}*");

        // Calculate the total hits
        var totalCntCollector = new TotalHitCountCollector();
        searcher.Search(query, totalCntCollector);
        double totalHits = totalCntCollector.TotalHits;

        if (totalHits == 0)
            return new PagedListInfo<ProductDto>();

        // Perform the search of preceding results with the collector
        int from = (pageNumber - 1) * pageSize;
        var after = from > 0
            ? searcher.Search(query, from).ScoreDocs.Last()
            : null;

        // Retrieve the necessary subsequent docs
        var collector = TopScoreDocCollector.Create(pageSize, after, true);
        searcher.Search(query, collector);
        var hits = collector.GetTopDocs().ScoreDocs;

        IList<ProductDto> prods = [];
        foreach (var hit in hits)
        {
            var document = searcher.Doc(hit.Doc);
            long id = Convert.ToInt64(
                document.GetField(nameof(ProductDto.Id)).GetStringValue()
            );
            var dto = await _productService.GetById(id);
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
            TotalCount: Convert.ToInt32(totalHits),
            HasPreviousPage: pageNumber > 1 && totalPages > 1,
            HasNextPage: totalPages > pageNumber
        );
    }
}
