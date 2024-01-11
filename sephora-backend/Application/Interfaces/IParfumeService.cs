using CleanArchitecture.Application.Dtos.Parfume;
using CleanArchitecture.Application.Dtos.Product;

namespace CleanArchitecture.Application.Interfaces;

public interface IParfumeService
{
    Task<IEnumerable<ParfumeDto>> Get();
    Task<ParfumeDto?> GetById(int id);
    Task Create(CreateProductParfumeDto createProductParfumeDTO);
    Task Edit(EditProductParfumeDTO editProductDTO);
    Task Delete(int id);
}