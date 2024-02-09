namespace CleanArchitecture.Application.Dtos.Product;

public class ProductDto
{
    public long Id { get; set; }
    public string Name { get; set; } = String.Empty;
    public string? Description { get; set; }
    public bool Active { get; set; }
    public BrandDto Brand { get; set; }
    public CategoryDto Category { get; set; }
    public IEnumerable<ProductPieceDTO> ProductPieces { get; set; }
}
