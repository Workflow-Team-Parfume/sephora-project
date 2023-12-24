using Core.Dtos.Parfume;
using Core.Dtos.Product;

namespace Core.Interfaces;

public interface IParfumeService
{
    Task<IEnumerable<ParfumeDto>> Get();
    Task<ParfumeDto?> GetById(int id);
    Task Create(CreateProductParfumeDto createProductParfumeDTO);
    Task Edit(EditProductParfumeDTO editProductDTO);
    Task Delete(int id);
}