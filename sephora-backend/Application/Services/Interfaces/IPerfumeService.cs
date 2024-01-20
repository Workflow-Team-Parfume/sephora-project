using CleanArchitecture.Application.Dtos.Parfumes;
using CleanArchitecture.Application.Dtos.Product;

namespace CleanArchitecture.Application.Services.Interfaces;

public interface IPerfumeService
{
    Task<IEnumerable<PerfumeDto>> Get();
    Task<PerfumeDto?> GetById(int id);
    Task Create(CreateProductParfumeDto createProductParfumeDto);
    Task Edit(EditProductParfumeDto editProductDto);
    Task Delete(int id);
}