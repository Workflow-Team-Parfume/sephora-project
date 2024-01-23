namespace CleanArchitecture.Application.Dtos.Product;

public class CreateProductDto
{
    public string Name { get; set; } = String.Empty;
    public string? Description { get; set; }
    public string ImgPath { get; set; } = String.Empty;
    public bool Active { get; set; }
    public int BrandId { get; set; }
    public int CategoryId { get; set; }
}