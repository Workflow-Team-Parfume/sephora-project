namespace CleanArchitecture.Application.Dtos.Product;

public class ProductDto
{
    public long Id { get; set; }
    public string Name { get; set; } = String.Empty;
    public string? Description { get; set; }
    public bool Active { get; set; }
    public BrandDto Brand { get; set; } = default!;
    public CategoryDto Category { get; set; }   
    public IEnumerable<ProductPieceDto>? Pieces { get; set; }
    public IEnumerable<RatingDto>? Ratings { get; set; }
    
    // TODO
    public decimal AverageRating { get; set; }
    
    public DateTime CreatedAt { get; set; }
    
    // Publication was less than 14 days ago
    public bool IsNew => Math.Abs((CreatedAt.Date - DateTime.UtcNow.Date).Days) < 14;
}
