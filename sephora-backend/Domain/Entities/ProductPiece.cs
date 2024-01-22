namespace CleanArchitecture.Domain.Entities;

public class ProductPiece
{
    public int Id { get; set; }

    public int? InStock { get; set; }

    public decimal Price { get; set; }

    public int AmountId { get; set; }

    public Amount? Amount { get; set; }

    public int ProductId { get; set; }

    public ProductEntity Product { get; set; }
}