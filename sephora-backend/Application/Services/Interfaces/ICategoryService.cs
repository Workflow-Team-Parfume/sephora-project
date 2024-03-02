namespace CleanArchitecture.Application.Services.Interfaces;

public interface ICategoryService
{
    IQueryable<CategoryDto> Get();

    async Task<PagedListInfo<CategoryDto>> Get(
        int pageNumber,
        int pageSize,
        string? orderBy = null,
        string? selectBy = null
    ) => await Get().ToPagedListInfoAsync(pageNumber, pageSize, orderBy, selectBy);

    Task<CategoryDto?> GetById(int id);
    Task Create(CreateCategoryDto categoryDto);
    Task Edit(EditCategoryDto categoryDto);
    Task Delete(int id);
}
