namespace CleanArchitecture.Application.Dtos.Cart;

public class CreateCartDTO
{
    public int ProductId { get; set; }
    public int Quantity { get; set; }
    
    // User ID is not needed here because it will be fetched from the JWT token
}