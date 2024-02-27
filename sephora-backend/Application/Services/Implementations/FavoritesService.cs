namespace CleanArchitecture.Application.Services.Implementations;

public class FavoritesService(
    UserManager<UserEntity> userManager,
    IRepository<ProductEntity> productRepository,
    IRepository<Favorite> favoritesRepository
)
    : IFavoritesService
{
    private string GetUserIdOrThrow(ClaimsPrincipal user)
        => userManager.GetUserId(user)
           ?? throw new UnauthorizedAccessException(
               ErrorMessages.UserNotFound
           );

    public async Task ChangeFavoriteStatus(ClaimsPrincipal user, long productId)
    {
        var userId = GetUserIdOrThrow(user);
        var product = await productRepository.GetById(productId);
        if (product is null)
            throw new ArgumentException(
                $"Product with the id={{{productId}}} is not found"
            );

        var favorite = await favoritesRepository.GetItemBySpec(
            new Favorites.Get(userId, productId)
        );
        
        if (favorite is null)
        {
            await favoritesRepository.Insert(new Favorite
            {
                UserId = userId,
                ProductId = productId,
                IsActive = true
            });
        }
        else
        {
            favorite.IsActive = !favorite.IsActive;
            await favoritesRepository.Update(favorite);
        }
        
        await favoritesRepository.Save();
    }
    
    public async Task<bool> IsFavorite(ClaimsPrincipal? user, long productId)
    {
        if (user is null)
            return false;
        
        try
        {
            var userId = GetUserIdOrThrow(user);
            return (await favoritesRepository.GetItemBySpec(
                new Favorites.Get(userId, productId)
            ))?.IsActive ?? false;
        }
        catch (UnauthorizedAccessException)
        {
            return false;
        }
    }
}