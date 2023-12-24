using Ardalis.Specification;
using Core.Entities;

namespace Core.Specifications;

public static class Amounts
{
    public class GetById : Specification<Amount>
    {
        public GetById(int id)
        {
            Query.Where(x => x.Id == id);
        }
    }
}