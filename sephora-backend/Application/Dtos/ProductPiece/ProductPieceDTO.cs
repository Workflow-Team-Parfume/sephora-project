namespace CleanArchitecture.Application.Dtos.ProductPiece;

public class ProductPieceDto
{
    public long Id { get; set; }
    public int? InStock { get; set; }
    public decimal Price { get; set; }
    public int Milliliters { get; set; }
    public bool IsBottledParfume { get; set; }
    public long ProductId { get; set; }
    public IEnumerable<PictureDto> ProductPictures { get; set; }
}
