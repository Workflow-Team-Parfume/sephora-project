using Core.Dtos.Parfume;
using Core.Dtos.Perfume;

namespace Core.Interfaces;

public interface IProductService
{
    Task<IEnumerable<ProductDTO>> Get();
    Task<ProductDTO?> GetById(int id);
    Task Create(CreateProductDto createProductDTO);
    Task Edit(EditProductDto editProductDTO);
    Task Delete(int id);
}