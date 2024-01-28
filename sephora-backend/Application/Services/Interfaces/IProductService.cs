namespace CleanArchitecture.Application.Services.Interfaces;

public interface IProductService
{
    Task<IEnumerable<ProductDto>> Get();
    Task<ProductDto?> GetById(int id);
    Task Create(CreateProductDto createProductDto);
    Task Edit(EditProductDto editProductDto);
    Task Delete(int id);
}