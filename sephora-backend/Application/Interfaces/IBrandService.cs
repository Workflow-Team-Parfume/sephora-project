using CleanArchitecture.Application.Dtos.Brand;

namespace CleanArchitecture.Application.Interfaces;

public interface IBrandService
{
    Task<IEnumerable<BrandDto>> Get();
    Task<BrandDto?> GetById(int id);
    Task Create(CreateBrandDto brandDto);
    Task Edit(BrandDto brandDto);
    Task Delete(int id);
}