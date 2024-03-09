namespace CleanArchitecture.Application.Services.Implementations;

public class ProductService(
    IRepository<ProductEntity> productRepo,
    IRepository<Characteristic> charRepo,
    IRepository<Favorite> favRepo,
    IPieceService pieceService,
    UserManager<UserEntity> userManager,
    IMapper mapper
) : IProductService
{
    private async Task<bool> IsFavorite(ClaimsPrincipal? user, long productId)
    {
        if (user is null)
            return false;

        var userId = userManager.GetUserId(user);
        if (userId is null)
            return false;
        
        var favorite = await favRepo.GetItemBySpec(
            new Favorites.Get(userId, productId)
        );
        return favorite?.IsActive ?? false;
    }
    
    public async Task Create(CreateProductDto createProductDto)
    {
        var entity = mapper.Map<ProductEntity>(createProductDto);
        await productRepo.Insert(entity);
        await productRepo.Save();
    }

    public async Task Delete(long id)
    {
        var product = await productRepo.GetItemBySpec(
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
            await charRepo.Delete(c);

        await productRepo.Delete(product);
        await productRepo.Save();
    }

    public async Task Edit(EditProductDto editProductDto)
    {
        var entity = mapper.Map<ProductEntity>(editProductDto);
        await productRepo.Update(entity);

        foreach (var c in entity.Characteristics)
        {
            c.ProductId = editProductDto.Id;
            switch (entity.Id)
            {
                case 0:
                    await charRepo.Insert(c);
                    break;
                case -1:
                    await charRepo.Delete(c);
                    break;
                default:
                    await charRepo.Update(c);
                    break;
            }
        }

        await productRepo.Save();
    }

    public async Task<IQueryable<ProductDto>> Get(ClaimsPrincipal? user = null)
    {
        var products = productRepo.GetListBySpec(new Products.GetAll())
            .ProjectTo<ProductDto>(mapper.ConfigurationProvider);
        await products.ForEachAsync(async x =>
        {
            x.IsFavorite = await IsFavorite(user, x.Id);
        });
        return products;
    }

    public async Task<ProductDto?> GetById(long id, ClaimsPrincipal? user = null)
    {
        ProductEntity? entity = await productRepo.GetItemBySpec(
            new Products.GetById(id)
        );

        if (entity is null)
            throw new ArgumentException(
                $"Product with the id={{{id}}} is not found"
            );
        
        entity.ProductPieces = entity.ProductPieces
            .OrderByDescending(x => x.CreatedAt)
            .ToList();
        
        foreach (var piece in entity.ProductPieces)
            piece.Product = null!;

        var dto = mapper.Map<ProductDto>(entity);
        dto.IsFavorite = await IsFavorite(user, entity.Id);
        return dto;
    }
}
