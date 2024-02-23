namespace CleanArchitecture.Application.Services.Interfaces;

public interface ICategoryService
{
    IQueryable<CategoryDto> Get();

    async Task<PagedListInfo<CategoryDto>> Get(
        int pageNumber,
        int pageSize,
        bool fromStart = true
    ) => await Get().ToPagedListInfo(pageNumber, pageSize, fromStart);

    Task<CategoryDto?> GetById(int id);
    Task Create(CreateCategoryDto categoryDto);
    Task Edit(CategoryDto categoryDto);
    Task Delete(int id);
}
