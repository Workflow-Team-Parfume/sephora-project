namespace CleanArchitecture.Application.Dtos.ProductPiece;

public class EditProductPieceDTO
{
    public int Id { get; set; }
    public int? InStock { get; set; }
    public decimal Price { get; set; }
    public int AmountId { get; set; }
}