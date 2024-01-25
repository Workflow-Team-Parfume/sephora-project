using Ardalis.Specification;
using CleanArchitecture.Domain.Entities;

namespace CleanArchitecture.Application.Specifications;

public static class CartItems
{
    public class GetByUserId : Specification<CartItem>
    {
        public GetByUserId(string userId)
        {
            Query
                .Where(x => x.UserId == userId)
                .Include(x => x.User)
                .Include(x => x.Product);
        }
    }
}
