namespace CleanArchitecture.Application.Services.Interfaces;

public interface IFavoritesService
{
    Task ChangeFavoriteStatus(ClaimsPrincipal user, long productId);

    Task<bool> IsFavorite(ClaimsPrincipal? user, long productId);

    Task<IQueryable<ProductDto>> Get(ClaimsPrincipal user);

    async Task<PagedListInfo<ProductDto>> Get(
        ClaimsPrincipal user,
        int pageNumber,
        int pageSize,
        string? orderBy = null,
        string? selectBy = null
    ) => await (await Get(user)).AsQueryable()
        .ToPagedListInfoAsync(pageNumber, pageSize, orderBy, selectBy);
}
