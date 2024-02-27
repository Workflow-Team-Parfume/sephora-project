namespace CleanArchitecture.Application.Services.Interfaces;

public interface IProductService
{
    IQueryable<ProductDto> Get();

    async Task<PagedListInfo<ProductDto>> Get(
        int pageNumber,
        int pageSize,
        string? orderBy = null,
        string? selectBy = null
    ) => await Get().ToPagedListInfoAsync(pageNumber, pageSize, orderBy, selectBy);

    Task<ProductDto?> GetById(long id);
    Task Create(CreateProductDto createProductDto);
    Task Edit(EditProductDto editProductDto);
    Task Delete(long id);
}
