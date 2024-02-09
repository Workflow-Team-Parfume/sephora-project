namespace CleanArchitecture.Application.Specifications;

public class ProductPictures
{
    public class GetPicsByPieceId : Specification<ProductPicture>
    {
        public GetPicsByPieceId(long pieceId)
        {
            Query.Where(x => x.ProductPieceId == pieceId);
        } 
    }
}
