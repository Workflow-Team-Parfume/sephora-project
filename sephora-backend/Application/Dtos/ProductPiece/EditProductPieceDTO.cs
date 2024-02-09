namespace CleanArchitecture.Application.Dtos.ProductPiece;

public class EditProductPieceDTO
{
    public long Id { get; set; }
    public int? InStock { get; set; }
    public decimal Price { get; set; }
    public int AmountId { get; set; }
    public bool IsBottledParfume { get; set; }

    /*
     * NewPhotos encapsulate photos that should be added to database
     * DeletePhotos encapsulate photos that will be deleted
     *
     * If there shouldn't be any changes commenced, both of these
     * collections must be empty
     */
    public IEnumerable<IFormFile> NewPhotos { get; set; }
    public IEnumerable<long> DeletePhotos { get; set; }
}
