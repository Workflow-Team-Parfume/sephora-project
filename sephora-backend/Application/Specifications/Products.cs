﻿using Ardalis.Specification;
using CleanArchitecture.Domain.Entities;

namespace CleanArchitecture.Application.Specifications;

public static class Products
{
    public class GetAll : Specification<ProductEntity>
    {
        public GetAll()
        {
            Query
                .Include(x => x.Brand)
                .Include(x => x.Category);
        }
    }
    public class GetById : Specification<ProductEntity>
    {
        public GetById(int id)
        {
            Query
                .Where(x => x.Id == id)
                .Include(x => x.Brand)
                .Include(x => x.Category);
        }
    }
}