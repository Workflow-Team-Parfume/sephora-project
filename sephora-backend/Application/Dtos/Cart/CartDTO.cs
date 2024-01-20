namespace CleanArchitecture.Application.Dtos.Cart;

// TODO: Change id to UUID

public class CartDTO
{
    public int Id { get; set; }
    public int Quantity { get; set; }
    
    // public string UserId { get; set; } = String.Empty;
    
    public int ProductId { get; set; }
    public string ProductName { get; set; } = String.Empty;
    public string? ProductDescription { get; set; }
    public string ProductImage { get; set; } = String.Empty;
    
    public string BrandName { get; set; } = String.Empty;
    
    public string CategoryName { get; set; } = String.Empty;
}
