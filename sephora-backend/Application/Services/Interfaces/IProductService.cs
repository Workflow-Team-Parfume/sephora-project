namespace CleanArchitecture.Application.Services.Interfaces;

public interface IProductService
{
    IQueryable<ProductDto> Get();

    async Task<PagedListInfo<ProductDto>> Get(
        int pageNumber,
        int pageSize,
        string? orderBy = null,
        string? selectBy = null,
        bool fromStart = false
    ) 
    {
        // TODO: Implement selection by dynamic where clause
        string? preparedSelectBy = null;

        return await Get().ToPagedListInfoAsync(
            pageNumber,
            pageSize,
            orderBy,
            preparedSelectBy,
            fromStart
        );
    }

    Task<ProductDto?> GetById(long id);
    Task Create(CreateProductDto createProductDto);
    Task Edit(EditProductDto editProductDto);
    Task Delete(long id);
}
