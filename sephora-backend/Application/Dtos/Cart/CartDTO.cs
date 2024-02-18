namespace CleanArchitecture.Application.Dtos.Cart;

public class CartDto
{
    public long Id { get; set; }
    public int Quantity { get; set; }
    
    // public string UserId { get; set; } = String.Empty;
    
    public long ProductId { get; set; }
    public long ProductPieceId { get; set; }
    public string ProductName { get; set; } = String.Empty;
    public string? ProductDescription { get; set; }
    public string ProductImage { get; set; } = String.Empty;
    
    public string BrandName { get; set; } = String.Empty;
    
    public string CategoryName { get; set; } = String.Empty;
    
    public decimal Price { get; set; }
    public decimal? Discount { get; set; }
    public decimal? Tax { get; set; }
    public decimal Total => Price * Quantity - (Discount ?? 0) * Price + (Tax ?? 0);
}
