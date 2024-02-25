namespace CleanArchitecture.Application.Dtos.Order;

public class OrderItemDto
{
    public long Id { get; set; }
    public int Quantity { get; set; }
    public ProductPieceDto ProductPiece { get; set; } = default!;
    public long OrderId { get; set; }
}
