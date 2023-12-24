using Core.Dtos.Amount;
using Core.Dtos.Parfume;

namespace Core.Dtos.ParfumePiece;

public class ParfumePieceDTO
{
    public int Id { get; set; }

    public int? InStock { get; set; }

    public decimal Price { get; set; }

    public AmountDto Amount { get; set; }

    public ParfumeDto Parfume { get; set; }
}