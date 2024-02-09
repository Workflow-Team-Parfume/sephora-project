namespace CleanArchitecture.Application.Specifications;

public static class ProductPieces
{
    public class GetAll : Specification<ProductPiece>
    {
        public GetAll()
        {
            Query.Include(x => x.ProductPictures);
        }
    }

    public class GetById : Specification<ProductPiece>
    {
        public GetById(long id)
        {
            Query
                .Where(x => x.Id == id)
                .Include(x => x.ProductPictures);
        }
    }
}
