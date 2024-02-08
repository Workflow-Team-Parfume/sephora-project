namespace CleanArchitecture.Application.Dtos.ProductPiece;

public class ProductPieceDTO
{
    public long Id { get; set; }
    public int? InStock { get; set; }
    public decimal Price { get; set; }
    public int Milliliters { get; set; }
    public ProductDto Product { get; set; }
    public bool IsBottledParfume { get; set; }
}
