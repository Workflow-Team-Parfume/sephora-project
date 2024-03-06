namespace CleanArchitecture.Application.SearchEngine;

public class ProductSearchService : ISearchService<ProductEntity, ProductDto>
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
    private readonly IndexWriter _writer;
    private readonly IProductService _productService;
    private readonly MultiFieldQueryParser _queryParser;
    private readonly IMapper _mapper;

    public ProductSearchService(
        string indexPath,
        IProductService productService,
        IMapper mapper
    )
    {
        var analyzer = new StandardAnalyzer(Version);
        var config = new IndexWriterConfig(Version, analyzer);
        
        _directory = new SimpleFSDirectory(indexPath);
        _productService = productService;
        _queryParser = new MultiFieldQueryParser(Version, Fields, analyzer);
        _writer = new IndexWriter(_directory, config);
        _mapper = mapper;
    }

    public void Index(ProductEntity entity)
        => Index(_mapper.Map<ProductDto>(entity));
    
    public void Index(ProductDto dto)
    {
        _writer.AddDocument(new Document
        {
            new StringField(
                nameof(ProductDto.Id),
                dto.Id.ToString(),
                Field.Store.YES),
            new StringField(
                nameof(ProductDto.Name),
                dto.Name, Field.Store.YES
            ),
            new StringField(
                nameof(ProductDto.DescriptionEn),
                dto.DescriptionEn,
                Field.Store.YES
            ),
            new StringField(
                nameof(ProductDto.DescriptionUa),
                dto.DescriptionUa,
                Field.Store.YES
            ),
            new StringField(
                "CategoryNameUa",
                dto.Category.NameUa,
                Field.Store.YES
            ),
            new StringField(
                "CategoryNameEn",
                dto.Category.NameEn,
                Field.Store.YES
            ),
            new StringField(
                "CategoryDescriptionUa",
                dto.Category.DescriptionUa,
                Field.Store.YES
            ),
            new StringField(
                "CategoryDescriptionEn",
                dto.Category.DescriptionEn,
                Field.Store.YES
            ),
            new StringField(
                "BrandName",
                dto.Brand.Name,
                Field.Store.YES
            ),
        });
        _writer.Commit();
    }

    private void RemoveCore(string id)
    {
        var term = new Term(nameof(ProductDto.Id), id);
        _writer.DeleteDocuments(term);
        _writer.Commit();
    }
 
    public void Remove(ProductEntity entity) => RemoveCore(entity.Id.ToString());

    public void Remove(ProductDto dto) => RemoveCore(dto.Id.ToString());

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

        var prods = new List<ProductDto>();
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
            TotalCount: Convert.ToInt32(totalHits),
            HasPreviousPage: pageNumber > 1 && totalPages > 1,
            HasNextPage: totalPages > pageNumber
        );
    }
}
