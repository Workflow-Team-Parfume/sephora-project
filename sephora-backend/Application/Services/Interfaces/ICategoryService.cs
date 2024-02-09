﻿namespace CleanArchitecture.Application.Services.Interfaces;

public interface ICategoryService
{
    Task<IEnumerable<CategoryDto>> Get();
    Task<CategoryDto?> GetById(int id);
    Task Create(CreateCategoryDto categoryDto);
    Task Edit(CategoryDto categoryDto);
    Task Delete(int id);
}
