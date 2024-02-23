namespace CleanArchitecture.Application.Services.Interfaces;

public interface IBrandService
{
    IQueryable<BrandDto> Get();

    async Task<PagedListInfo<BrandDto>> Get(
        int pageNumber,
        int pageSize,
        bool fromStart = true
    ) => await Get().ToPagedListInfo(pageNumber, pageSize, fromStart);

    Task<BrandDto?> GetById(int id);
    Task Create(CreateBrandDto brandDto);
    Task Edit(BrandDto brandDto);
    Task Delete(int id);
}
