﻿using AutoMapper;
using Core.Dtos.Brand;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;

namespace Core.Services;

public class BrandService(
    IRepository<Brand> brandRepository, 
    IMapper mapper) 
    : IBrandService
{
    public async Task Create(CreateBrandDto brandDTO)
    {
        await brandRepository.Insert(mapper.Map<Brand>(brandDTO));
        await brandRepository.Save();
    }

    public async Task Delete(int id)
    {
        if (await brandRepository.GetById(id) == null)
            return;

        await brandRepository.Delete(id);
        await brandRepository.Save();
    }

    public async Task Edit(BrandDto brandDTO)
    {
        await brandRepository.Update(mapper.Map<Brand>(brandDTO));
        await brandRepository.Save();
    }

    public async Task<IEnumerable<BrandDto>> Get()
    {
        return mapper.Map<IEnumerable<BrandDto>>(await brandRepository.GetAll());
    }

    public async Task<BrandDto?> GetById(int id)
    {
        Brand? brand = await brandRepository.GetItemBySpec(new Brands.GetById(id));

        if (brand == null)
            throw new Exception();

        return mapper.Map<BrandDto>(brand);
    }
}