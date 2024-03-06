namespace CleanArchitecture.Application.SearchEngine;

public class ProductSearchService : ISearchService<ProductEntity, ProductDto>
{
    private const LuceneVersion Version = LuceneVersion.LUCENE_48;
    private readonly StandardAnalyzer _analyzer;
    private readonly SimpleFSDirectory _directory;
    private readonly IndexWriter _writer;
    private readonly IMapper _mapper;
    private readonly IProductService _productService;

    public ProductSearchService(
        string indexPath,
        IProductService productService,
        IMapper mapper
    )
    {
        _mapper = mapper;
        _analyzer = new StandardAnalyzer(Version);
        _directory = new SimpleFSDirectory(indexPath);
        _productService = productService;

        var config = new IndexWriterConfig(Version, _analyzer);
        _writer = new IndexWriter(_directory, config);
    }

    public void Index(ProductEntity entity)
    {
        _writer.AddDocument(new Document
        {
            new StringField(nameof(ProductEntity.Id), entity.Id.ToString(), Field.Store.YES),
            new StringField(nameof(ProductEntity.Name), entity.Name, Field.Store.YES),
            new StringField(nameof(ProductEntity.DescriptionEn), entity.DescriptionEn, Field.Store.YES),
            new StringField(nameof(ProductEntity.DescriptionUa), entity.DescriptionUa, Field.Store.YES),
            new StringField("CategoryNameUa", entity.Category.NameUa, Field.Store.YES),
            new StringField("CategoryNameEn", entity.Category.NameEn, Field.Store.YES),
            new StringField("CategoryDescriptionUa", entity.Category.DescriptionUa, Field.Store.YES),
            new StringField("CategoryDescriptionEn", entity.Category.DescriptionEn, Field.Store.YES),
            new StringField("BrandName", entity.Brand.Name, Field.Store.YES),
        });
        _writer.Commit();
    }

    public async Task<PagedListInfo<ProductDto>> Search(
        string searchTerm,
        int pageNumber = 1,
        int pageSize = 10
    )
    {
        using var directoryReader = DirectoryReader.Open(_directory);
        var indexSearcher = new IndexSearcher(directoryReader);
        string[] fields =
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
        var queryParser = new MultiFieldQueryParser(Version, fields, _analyzer);
        var query = queryParser.Parse(searchTerm);
        var hits = indexSearcher.Search(query, 1000).ScoreDocs;
        var prods = new List<ProductDto>();
        foreach (var hit in hits)
        {
            var document = indexSearcher.Doc(hit.Doc);
            var dto = await _productService.GetById(
                document.GetField(nameof(ProductEntity.Id)).GetInt64Value()
                ?? 0
            );
            if (dto is not null)
                prods.Add(dto);
        }

        return prods.ToPagedListInfo(pageNumber, pageSize);
    }
}
