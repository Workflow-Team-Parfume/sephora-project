namespace CleanArchitecture.Application.Services.Implementations;

public class ProductService(
    IRepository<ProductEntity> productRepo,
    IRepository<Characteristic> charRepo,
    IRepository<Favorite> favRepo,
    IPieceService pieceService,
    UserManager<UserEntity> userManager,
    ISearchService<ProductEntity, ProductDto> searchService,
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

        // index the product
        entity = await productRepo.GetItemBySpec(new Products.GetById(entity.Id));
        searchService.Index(entity!);
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

        // remove from index
        searchService.Remove(product);
    }

    public async Task Edit(EditProductDto editProductDto)
    {
        foreach (var characteristic in editProductDto.Characteristics)
        {
            var c = mapper.Map<Characteristic>(characteristic);
            c.ProductId = editProductDto.Id;
            switch (c.Id)
            {
                case 0:
                    await charRepo.Insert(c);
                    break;
                case < 0:
                    throw new ArgumentException(
                        "Characteristic with the ID less than 0 is not allowed"
                    );
                default: // any positive value
                    await charRepo.Update(c);
                    break;
            }
        }

        foreach (var charId in editProductDto.DeleteCharacteristics)
            await charRepo.Delete(charId);

        await charRepo.Save();

        var entity = await productRepo.GetById(editProductDto.Id);
        if (entity is null)
            throw new ArgumentException(
                $"Product with the id={{{editProductDto.Id}}} is not found"
            );

        // remove from index
        searchService.Remove(entity);

        mapper.Map(editProductDto, entity);
        await productRepo.Update(entity);
        await productRepo.Save();

        // index the product
        entity = await productRepo.GetItemBySpec(new Products.GetById(entity.Id));
        searchService.Index(entity!);
    }

    // TODO: Fix the issue with the favorites
    public async Task<IQueryable<ProductDto>> Get(ClaimsPrincipal? user = null)
    {
        var products = productRepo.GetListBySpec(new Products.GetAll())
            .ProjectTo<ProductDto>(mapper.ConfigurationProvider);
        await products.ForEachAsync(x => x.IsFavorite = IsFavorite(user, x.Id).Result);
        return products;
    }

    public async Task<PagedListInfo<ProductDto>> Get(
        int pageNumber,
        int pageSize,
        string? orderBy = null,
        string? selectBy = null,
        ClaimsPrincipal? user = null
    )
    {
        var count = await productRepo.Count();
        var list = await productRepo.GetRange(
            pageNumber,
            pageSize,
            orderBy,
            selectBy
        ).ProjectTo<ProductDto>(mapper.ConfigurationProvider).ToListAsync();

        foreach (var product in list)
            product.IsFavorite = await IsFavorite(user, product.Id);

        return PagedListInfo.Create(list, pageNumber, pageSize, count);
    }

    public async Task<ProductDto?> GetById(long id, ClaimsPrincipal? user = null)
    {
        ProductEntity? entity = await productRepo.GetItemBySpec(
            new Products.GetById(id)
        );

        if (entity is null)
            return null;

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
