using Ardalis.Specification;
using CleanArchitecture.Domain.Entities;

namespace CleanArchitecture.Application.Specifications;

public static class Brands
{
    public class GetById : Specification<Brand>
    {
        public GetById(int id)
        {
            Query.Where(x => x.Id == id);
        }
    }
}