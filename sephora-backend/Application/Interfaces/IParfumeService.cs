using CleanArchitecture.Application.Dtos.Parfumes;
using CleanArchitecture.Application.Dtos.Product;

namespace CleanArchitecture.Application.Interfaces;

public interface IParfumeService
{
    Task<IEnumerable<ParfumeDto>> Get();
    Task<ParfumeDto?> GetById(int id);
    Task Create(CreateProductParfumeDto createProductParfumeDto);
    Task Edit(EditProductParfumeDto editProductDto);
    Task Delete(int id);
}