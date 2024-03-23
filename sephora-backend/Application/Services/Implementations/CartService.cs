namespace CleanArchitecture.Application.Services.Implementations;

public class CartService(
    IRepository<CartItem> cartRepository,
    UserManager<UserEntity> userManager,
    IMapper mapper
) : ICartService
{
    private string GetUserIdOrThrow(ClaimsPrincipal user)
        => userManager.GetUserId(user)
           ?? throw new ArgumentException(
               ErrorMessages.UserNotFound,
               nameof(user)
           );

    public IQueryable<CartDto> Get(ClaimsPrincipal user)
    {
        string userId = GetUserIdOrThrow(user);
        var specification = new CartItems.GetByUserId(userId);

        return cartRepository.GetListBySpec(specification)
            .ProjectTo<CartDto>(mapper.ConfigurationProvider);
    }

    public async Task<PagedListInfo<CartDto>> Get(
        ClaimsPrincipal user,
        int pageNumber,
        int pageSize,
        string? orderBy = null,
        string? selectBy = null
    )
    {
        string userId = GetUserIdOrThrow(user);
        var spec = new CartItems.GetByUserId(userId);

        var count = await cartRepository.CountBySpec(spec);
        var list = await cartRepository
            .GetRangeBySpec(spec, pageNumber, pageSize, orderBy, selectBy)
            .ProjectTo<CartDto>(mapper.ConfigurationProvider).ToListAsync();

        return PagedListInfo.Create(list, pageNumber, pageSize, count);
    }

    public async Task<CartDto?> GetById(long id)
    {
        CartItem? entry = await cartRepository.GetById(id);
        return entry is null ? null : mapper.Map<CartDto>(entry);
    }

    public async Task Create(CreateCartDto cartDto, ClaimsPrincipal user)
    {
        string userId = GetUserIdOrThrow(user);
        CartItem? dbEntry = await cartRepository.GetItemBySpec(
            new CartItems.GetByUserAndPiece(
                userId,
                cartDto.ProductPieceId
            ));

        if (dbEntry is not null)
            return; // the item already exists

        dbEntry = mapper.Map<CartItem>(cartDto);
        dbEntry.UserId = userId;

        await cartRepository.Insert(dbEntry);
        await cartRepository.Save();
    }

    public async Task Delete(long id, ClaimsPrincipal user)
    {
        CartItem? entity = await cartRepository.GetById(id);
        if (entity is null)
            throw new KeyNotFoundException(
                "The cart item with the specified ID was not found"
            );
        if (entity.UserId != GetUserIdOrThrow(user))
            throw new UnauthorizedAccessException(
                "This user doesn't owns this record"
            );

        await cartRepository.Delete(entity);
        await cartRepository.Save();
    }

    public async Task Update(CartDto dto, ClaimsPrincipal user)
    {
        var entity = await cartRepository.GetById(dto.Id);
        string userId = GetUserIdOrThrow(user);
        if (entity?.UserId != userId)
            throw new UnauthorizedAccessException(
                "This user doesn't owns this record"
            );

        mapper.Map(dto, entity);

        await cartRepository.Update(entity);
        await cartRepository.Save();
    }

    public async Task DeleteAll(ClaimsPrincipal user)
    {
        string userId = GetUserIdOrThrow(user);
        var specification = new CartItems.GetByUserId(userId);

        await cartRepository.DeleteBySpec(specification);
    }
}
