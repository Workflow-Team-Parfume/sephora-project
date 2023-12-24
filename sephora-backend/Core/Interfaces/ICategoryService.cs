using Core.Dtos.Category;

namespace Core.Interfaces;

public interface ICategoryService
{
    Task<IEnumerable<CategoryDto>> Get();
    Task<CategoryDto?> GetById(int id);
    Task Create(CreateCategoryDto categoryDTO);
    Task Edit(CategoryDto categoryDTO);
    Task Delete(int id);
}