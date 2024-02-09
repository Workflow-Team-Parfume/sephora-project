namespace CleanArchitecture.Application.Services.Implementations;

public class CartService(
    IRepository<CartItem> cartRepository,
    UserManager<UserEntity> userManager,
    IMapper mapper
) : ICartService
{
    private async Task<UserEntity?> GetUser(ClaimsPrincipal user)
        => await userManager.GetUserAsync(user);

    private async Task<UserEntity> GetUserOrThrow(ClaimsPrincipal user)
        => await GetUser(user)
           ?? throw new ArgumentException(
               ErrorMessages.UserNotFound,
               nameof(user)
           );

    public async Task<IEnumerable<CartDto>> Get(ClaimsPrincipal user)
    {
        UserEntity userEntity = await GetUserOrThrow(user);
        var specification = new CartItems.GetByUserId(userEntity.Id);

        return mapper.Map<IEnumerable<CartDto>>(
            await cartRepository.GetListBySpec(specification)
        );
    }

    public async Task<CartDto?> GetById(long id)
    {
        CartItem? entry = await cartRepository.GetById(id);
        return entry is null ? null : mapper.Map<CartDto>(entry);
    }

    public async Task Create(CreateCartDto cartDto, ClaimsPrincipal user)
    {
        UserEntity userEntity = await GetUserOrThrow(user);

        CartItem dbEntry = mapper.Map<CartItem>(cartDto);
        dbEntry.UserId = userEntity.Id;

        await cartRepository.Insert(dbEntry);
        await cartRepository.Save();
    }

    public async Task Delete(long id)
    {
        await cartRepository.Delete(id);
        await cartRepository.Save();
    }

    public async Task DeleteAll(ClaimsPrincipal user)
    {
        UserEntity userEntity = await GetUserOrThrow(user);
        var specification = new CartItems.GetByUserId(userEntity.Id);

        await cartRepository.DeleteBySpec(specification);
    }
}
