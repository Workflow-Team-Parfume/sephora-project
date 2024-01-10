namespace CleanArchitecture.Application.Dtos.ParfumePiece;

public class EditParfumePieceDto
{
    public int Id { get; set; }
    public int? InStock { get; set; }
    public decimal Price { get; set; }
    public int AmountId { get; set; }
}