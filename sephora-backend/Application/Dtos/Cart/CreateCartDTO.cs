namespace CleanArchitecture.Application.Dtos.Cart;

public class CreateCartDto
{
    public int ProductPieceId { get; set; }
    public int Quantity { get; set; }
    
    // User ID is not needed here because it will be fetched from the JWT token
}
