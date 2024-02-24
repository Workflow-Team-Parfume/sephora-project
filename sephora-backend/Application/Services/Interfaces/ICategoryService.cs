namespace CleanArchitecture.Application.Services.Interfaces;

public interface ICategoryService
{
    IQueryable<CategoryDto> Get();

    async Task<PagedListInfo<CategoryDto>> Get(
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

    Task<CategoryDto?> GetById(int id);
    Task Create(CreateCategoryDto categoryDto);
    Task Edit(CategoryDto categoryDto);
    Task Delete(int id);
}
