namespace CleanArchitecture.Domain.Entities;

public class Care
{
    public int Id { get; set; }
    public int ProductId { get; set; }
    public ProductEntity Product { get; set; }
    public ICollection<CarePiece>? CarePieces { get; set; }

}