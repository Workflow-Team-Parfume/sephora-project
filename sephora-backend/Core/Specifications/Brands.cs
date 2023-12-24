using Ardalis.Specification;
using Core.Entities;

namespace Core.Specifications;

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