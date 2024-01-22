namespace CleanArchitecture.Application.Dtos.ProductPiece;

public class CreateProductPieceDto
{
    public int? InStock { get; set; }

    public decimal Price { get; set; }

    public int AmountId { get; set; }
}