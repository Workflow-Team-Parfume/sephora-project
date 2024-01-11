namespace CleanArchitecture.Domain.Entities;

public class Amount
{
    public int Id { get; set; }

    public int Mililitters { get; set; }

    public ICollection<ParfumePiece>? ParfumePieces { get; set; }

    public ICollection<CarePiece>? CarePieces { get; set; }

}
