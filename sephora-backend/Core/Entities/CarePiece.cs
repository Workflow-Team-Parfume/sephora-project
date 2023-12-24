namespace Core.Entities;

public class CarePiece
{
    public int Id { get; set; }

    public int? InStock { get; set; }

    public decimal Price { get; set; }

    public int AmountId { get; set; }

    public Amount? Amount { get; set; }

    public int CareId { get; set; }

    public Care Care { get; set; }
}