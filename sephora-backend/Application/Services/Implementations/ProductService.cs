namespace CleanArchitecture.Application.Services.Implementations;

public class ProductService(
    IRepository<ProductEntity> productRepository,
    IRepository<Characteristic> characteristicRepository,
    IPieceService pieceService,
    IFavoritesService favService,
    IMapper mapper
) : IProductService
{
    public async Task Create(CreateProductDto createProductDto)
    {
        var entity = mapper.Map<ProductEntity>(createProductDto);
        await productRepository.Insert(entity);
        await productRepository.Save();

        foreach (var charDto in createProductDto.Characteristics)
        {
            var charEntity = mapper.Map<Characteristic>(charDto);
            charEntity.ProductId = entity.Id;
            await characteristicRepository.Insert(charEntity);
        }

        await characteristicRepository.Save();
    }

    public async Task Delete(long id)
    {
        var product = await productRepository.GetItemBySpec(
            new Products.GetById(id)
        );
        if (product is null)
            throw new ArgumentException(
                $"Product with the id={{{id}}} is not found"
            );

        // delete pieces directly so the files are also cleaned up
        var pieces = product.ProductPieces;
        foreach (var piece in pieces)
            await pieceService.Delete(mapper.Map<ProductPiece>(piece).Id);

        foreach (var c in product.Characteristics)
            await characteristicRepository.Delete(c);

        await productRepository.Delete(product);
        await productRepository.Save();
    }

    public async Task Edit(EditProductDto editProductDto)
    {
        var entity = mapper.Map<ProductEntity>(editProductDto);
        await productRepository.Update(entity);

        foreach (var c in entity.Characteristics)
        {
            c.ProductId = editProductDto.Id;
            switch (entity.Id)
            {
                case 0:
                    await characteristicRepository.Insert(c);
                    break;
                case -1:
                    await characteristicRepository.Delete(c);
                    break;
                default:
                    await characteristicRepository.Update(c);
                    break;
            }
        }

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
