namespace CleanArchitecture.Application.Specifications;

public static class Products
{
    public class GetAll : Specification<ProductEntity>
    {
        public GetAll()
        {
            Query
                .Include(prod => prod.Brand)
                .Include(prod => prod.Category)
                .Include(prod => prod.ProductPieces)
                .ThenInclude(piece => piece.ProductPictures)    // doubt it
                .Include(prod => prod.ProductPieces)
                .ThenInclude(piece => piece.Amount);            // doubt it
        }
    }
    public class GetById : Specification<ProductEntity>
    {
        public GetById(long id)
        {
            Query
                .Where(x => x.Id == id)
                .Include(x => x.Brand)
                .Include(x => x.Category)
                .Include(x => x.ProductPieces)
                .ThenInclude(piece => piece.ProductPictures)
                .Include(prod => prod.ProductPieces)
                .ThenInclude(piece => piece.Amount);
        }
    }
}
