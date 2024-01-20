using AutoMapper;
using CleanArchitecture.Application.Dtos.Category;
using CleanArchitecture.Application.Interfaces;
using CleanArchitecture.Application.Specifications;
using CleanArchitecture.Domain.Entities;
using Infrastructure.Interfaces;

namespace CleanArchitecture.Application.Services;

public class CategoryService(
    IRepository<Category> categoryRepository, 
    IMapper mapper) 
    : ICategoryService
{
    public async Task Create(CreateCategoryDto categoryDto)
    {
        await categoryRepository.Insert(mapper.Map<Category>(categoryDto));
        await categoryRepository.Save();
    }

    public async Task Delete(int id)
    {
        if (await categoryRepository.GetById(id) == null)
            return;

        await categoryRepository.Delete(id);
        await categoryRepository.Save();

    }

    public async Task Edit(CategoryDto categoryDto)
    {
        await categoryRepository.Update(mapper.Map<Category>(categoryDto));
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