namespace Core.Entities;

public class Parfume
{
    public int Id { get; set; }

    public int ProductId { get; set; }
    public ProductEntity Product { get; set; }

    public ICollection<ParfumePiece>? ParfumePieces { get; set; }
}