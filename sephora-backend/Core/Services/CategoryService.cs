using AutoMapper;
using Core.Dtos.Category;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;

namespace Core.Services;

public class CategoryService(
    IRepository<Category> categoryRepository, 
    IMapper mapper) 
    : ICategoryService
{
    public async Task Create(CreateCategoryDto categoryDTO)
    {
        await categoryRepository.Insert(mapper.Map<Category>(categoryDTO));
        await categoryRepository.Save();
    }

    public async Task Delete(int id)
    {
        if (await categoryRepository.GetById(id) == null)
            return;

        await categoryRepository.Delete(id);
        await categoryRepository.Save();

    }

    public async Task Edit(CategoryDto categoryDTO)
    {
        await categoryRepository.Update(mapper.Map<Category>(categoryDTO));
        await categoryRepository.Save();
    }

    public async Task<IEnumerable<CategoryDto>> Get()
    {
        return mapper.Map<IEnumerable<CategoryDto>>(await categoryRepository.GetAll());
    }

    public async Task<CategoryDto?> GetById(int id)
    {
        Category? category = await categoryRepository.GetItemBySpec(new Categories.GetById(id));

        if (category == null)
            throw new Exception();

        return mapper.Map<CategoryDto>(category);
    }
}