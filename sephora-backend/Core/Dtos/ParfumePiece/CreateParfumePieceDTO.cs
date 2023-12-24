namespace Core.Dtos.ParfumePiece;

public class CreateParfumePieceDto
{
    public int? InStock { get; set; }

    public decimal Price { get; set; }

    public int AmountId { get; set; }
}