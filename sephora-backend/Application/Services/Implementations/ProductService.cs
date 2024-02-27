namespace CleanArchitecture.Application.Services.Implementations;

public class ProductService(
    IRepository<ProductEntity> productRepository,
    IPieceService pieceService,
    IFavoritesService favService,
    IMapper mapper
) : IProductService
{
    public async Task Create(CreateProductDto createProductDto)
    {
        await productRepository.Insert(
            mapper.Map<ProductEntity>(createProductDto)
        );
        await productRepository.Save();
    }

    public async Task Delete(long id)
    {
        // delete pieces directly so the files are also cleaned up
        var pieces = (await productRepository.GetItemBySpec(
                new Products.GetById(id))
            )?.ProductPieces;
        foreach (var piece in pieces ?? [])
            await pieceService.Delete(mapper.Map<ProductPiece>(piece).Id);

        await productRepository.Delete(id);
        await productRepository.Save();
    }

    public async Task Edit(EditProductDto editProductDto)
    {
        await productRepository.Update(
            mapper.Map<ProductEntity>(editProductDto)
        );
        await productRepository.Save();
    }

    public async Task<IQueryable<ProductDto>> Get(ClaimsPrincipal? user = null)
    {
        var products = productRepository.GetListBySpec(new Products.GetAll())
            .ProjectTo<ProductDto>(mapper.ConfigurationProvider);
        await products.ForEachAsync(async x =>
        {
            x.IsFavorite = await favService.IsFavorite(user, x.Id);
        });
        return products;
    }

    public async Task<ProductDto?> GetById(long id, ClaimsPrincipal? user = null)
    {
        ProductEntity? entity = await productRepository.GetItemBySpec(
            new Products.GetById(id)
        );

        if (entity is null)
            throw new ArgumentException(
                $"Product with the id={{{id}}} is not found"
            );

        var dto = mapper.Map<ProductDto>(entity);
        dto.IsFavorite = await favService.IsFavorite(user, entity.Id);
        return dto;
    }
}
