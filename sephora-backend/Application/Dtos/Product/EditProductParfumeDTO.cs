using CleanArchitecture.Application.Dtos.ParfumePiece;

namespace CleanArchitecture.Application.Dtos.Product;

public class EditProductParfumeDTO
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string? Description { get; set; }
    public string ImgPath { get; set; }
    public bool Active { get; set; }
    public int BrandId { get; set; }
    public int CategoryId { get; set; }
    public List<EditParfumePieceDto> ParfumePieces { get; set; }
}