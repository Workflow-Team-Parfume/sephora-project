namespace CleanArchitecture.Application.Services.Interfaces;

public interface IFavoritesService
{
    Task ChangeFavoriteStatus(ClaimsPrincipal user, long productId);
    Task<bool> IsFavorite(ClaimsPrincipal? user, long productId);
}
