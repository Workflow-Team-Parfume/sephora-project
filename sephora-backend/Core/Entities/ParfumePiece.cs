namespace Core.Entities;

public class ParfumePiece
{
    public int Id { get; set; }

    public int? InStock { get; set; }

    public decimal Price { get; set; }

    public int AmountId { get; set; }

    public Amount? Amount { get; set; }

    public int ParfumeId { get; set; }

    public Parfume Parfume { get; set; }
}