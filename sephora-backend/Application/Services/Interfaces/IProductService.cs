namespace CleanArchitecture.Application.Services.Interfaces;

public interface IProductService
{
    Task<IEnumerable<ProductDto>> Get();

    async Task<PagedListInfo<ProductDto>> Get(
        int pageNumber,
        int pageSize,
        bool fromStart = true
    ) => (await Get()).ToPagedListInfo(pageNumber, pageSize, fromStart);

    Task<ProductDto?> GetById(long id);
    Task Create(CreateProductDto createProductDto);
    Task Edit(EditProductDto editProductDto);
    Task Delete(long id);
}
