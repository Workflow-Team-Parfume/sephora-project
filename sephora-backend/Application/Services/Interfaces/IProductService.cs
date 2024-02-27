namespace CleanArchitecture.Application.Services.Interfaces;

public interface IProductService
{
    Task<IQueryable<ProductDto>> Get(ClaimsPrincipal? user = null);

    async Task<PagedListInfo<ProductDto>> Get(
        int pageNumber,
        int pageSize,
        string? orderBy = null,
        string? selectBy = null,
        ClaimsPrincipal? user = null
    ) => await (await Get(user))
        .ToPagedListInfoAsync(pageNumber, pageSize, orderBy, selectBy);

    Task<ProductDto?> GetById(long id, ClaimsPrincipal? user = null);
    Task Create(CreateProductDto createProductDto);
    Task Edit(EditProductDto editProductDto);
    Task Delete(long id);
}
