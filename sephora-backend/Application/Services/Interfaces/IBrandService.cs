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
    )
    {
        // TODO: Implement selection by dynamic where clause
        string? preparedSelectBy = null;

        return await Get().ToPagedListInfoAsync(
            pageNumber,
            pageSize,
            orderBy,
            preparedSelectBy,
            fromStart
        );
    }

    Task<BrandDto?> GetById(int id);
    Task Create(CreateBrandDto brandDto);
    Task Edit(BrandDto brandDto);
    Task Delete(int id);
}
