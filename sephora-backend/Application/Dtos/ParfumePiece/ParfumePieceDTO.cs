using CleanArchitecture.Application.Dtos.Amount;
using CleanArchitecture.Application.Dtos.Parfume;

namespace CleanArchitecture.Application.Dtos.ParfumePiece;

public class ParfumePieceDTO
{
    public int Id { get; set; }

    public int? InStock { get; set; }

    public decimal Price { get; set; }

    public AmountDto Amount { get; set; }

    public ParfumeDto Parfume { get; set; }
}