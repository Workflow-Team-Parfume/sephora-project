namespace CleanArchitecture.Application.Dtos.Product;

public class EditProductDto
{
    public int Id { get; set; }
    public string Name { get; set; } = String.Empty;
    public string? Description { get; set; }
    public string ImgPath { get; set; } = String.Empty;
    public bool Active { get; set; }
    public int BrandId { get; set; }
    public int CategoryId { get; set; }
}