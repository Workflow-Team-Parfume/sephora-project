using CleanArchitecture.Application.Dtos.Parfume;

namespace CleanArchitecture.Application.Interfaces;

public interface IProductService
{
    Task<IEnumerable<ProductDTO>> Get();
    Task<ProductDTO?> GetById(int id);
    Task Create(CreateProductDto createProductDTO);
    Task Edit(EditProductDto editProductDTO);
    Task Delete(int id);
}