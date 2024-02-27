namespace CleanArchitecture.Application.Specifications;

public static class Favorites
{
    public class Get : Specification<Favorite>
    {
        public Get(string userId, long productId)
        {
            Query
                .Where(x => x.UserId == userId && x.ProductId == productId);
        }
    }
}
