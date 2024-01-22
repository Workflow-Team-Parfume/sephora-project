namespace CleanArchitecture.Domain.Entities;

public class Amount
{
    public int Id { get; set; }

    public int Mililitters { get; set; }

    public ICollection<ProductPiece>? ProductPieces { get; set; }
}
