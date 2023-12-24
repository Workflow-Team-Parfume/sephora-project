using Core.Dtos.Brand;
using Core.Dtos.Category;

namespace Core.Dtos.Parfume;

public class ProductDTO
{
    public int Id { get; set; }
    public string Name { get; set; } = String.Empty;
    public string? Description { get; set; }
    public string ImgPath { get; set; } = String.Empty;
    public bool Active { get; set; }
    public BrandDto Brand { get; set; }
    public CategoryDto Category { get; set; }
}