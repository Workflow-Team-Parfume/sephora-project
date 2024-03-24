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
                .Include(x => x.ProductPiece)
                .Include(x => x.ProductPiece.Product)
                .Include(x => x.ProductPiece.Amount);
        }
    }

    public class GetByUserAndPiece : Specification<CartItem>
    {
        public GetByUserAndPiece(string userId, long pieceId)
        {
            Query
                .Where(x =>
                    x.UserId == userId
                    && x.ProductPiece.Id == pieceId
                )
                .Include(x => x.User)
                .Include(x => x.ProductPiece)
                .Include(x => x.ProductPiece.Product)
                .Include(x => x.ProductPiece.Amount);
        }
    }
}
