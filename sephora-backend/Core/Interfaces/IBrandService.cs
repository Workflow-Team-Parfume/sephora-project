using Core.Dtos.Brand;

namespace Core.Interfaces;

public interface IBrandService
{
    Task<IEnumerable<BrandDto>> Get();
    Task<BrandDto?> GetById(int id);
    Task Create(CreateBrandDto brandDTO);
    Task Edit(BrandDto brandDTO);
    Task Delete(int id);
}