using Core.Dtos.ParfumePiece;

namespace Core.Dtos.Parfume;

public class ParfumeDto
{
    public int Id { get; set; }
    public ProductDTO Product { get; set; }
    public List<ParfumePieceDTO> ParfumePieces { get; set; }
}