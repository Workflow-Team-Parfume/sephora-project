using CleanArchitecture.Application.Dtos.ParfumePiece;
using CleanArchitecture.Application.Dtos.Product;

namespace CleanArchitecture.Application.Dtos.Parfumes;

public class ParfumeDto
{
    public int Id { get; set; }
    public ProductDto Product { get; set; }
    public List<ParfumePieceDto> ParfumePieces { get; set; }
}