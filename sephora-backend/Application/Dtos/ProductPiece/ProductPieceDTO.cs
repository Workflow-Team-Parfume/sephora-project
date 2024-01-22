using CleanArchitecture.Application.Dtos.Amount;
using CleanArchitecture.Application.Dtos.Product;

namespace CleanArchitecture.Application.Dtos.ProductPiece;

public class ProductPieceDTO
{
    public int Id { get; set; }

    public int? InStock { get; set; }

    public decimal Price { get; set; }

    public AmountDto Amount { get; set; }

    public ProductDTO Product { get; set; }
}