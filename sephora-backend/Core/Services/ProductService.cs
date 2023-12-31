﻿using AutoMapper;
using Core.Dtos.Parfume;
using Core.Dtos.Perfume;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;

namespace Core.Services;

public class ProductService(
    IRepository<ProductEntity> productRepository, 
    IMapper mapper)
    : IProductService
{
    public async Task Create(CreateProductDto createProductDTO)
    {
        await productRepository.Insert(mapper.Map<ProductEntity>(createProductDTO));
        await productRepository.Save();
    }

    public async Task Delete(int id)
    {
        if (await productRepository.GetById(id) == null)
            return;

        await productRepository.Delete(id);
        await productRepository.Save();
    }

    public async Task Edit(EditProductDto editProductDTO)
    {
        await productRepository.Update(mapper.Map<ProductEntity>(editProductDTO));
        await productRepository.Save();
    }

    public async Task<IEnumerable<ProductDTO>> Get()
    {
        var result = await productRepository.GetListBySpec(new Products.GetAll());

        return mapper.Map<IEnumerable<ProductDTO>>(result);
    }

    public async Task<ProductDTO?> GetById(int id)
    {
        ProductEntity? productDTO = await productRepository.GetItemBySpec(new Products.GetById(id));

        if (productDTO == null)
            throw new Exception();

        return mapper.Map<ProductDTO>(productDTO);
    }
}