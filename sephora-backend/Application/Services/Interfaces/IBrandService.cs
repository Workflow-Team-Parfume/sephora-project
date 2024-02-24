namespace CleanArchitecture.Application.Services.Interfaces;

public interface IBrandService
{
    IQueryable<BrandDto> Get();

    async Task<PagedListInfo<BrandDto>> Get(
        int pageNumber,
        int pageSize,
        string? orderBy = null,
        string? selectBy = null,
        bool fromStart = false
    ) => await Get().ToPagedListInfoAsync(
        pageNumber,
        pageSize,
        orderBy,
        selectBy,
        fromStart
    );

    Task<BrandDto?> GetById(int id);
    Task Create(CreateBrandDto brandDto);
    Task Edit(BrandDto brandDto);
    Task Delete(int id);
}
