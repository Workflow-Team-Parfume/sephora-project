namespace CleanArchitecture.Domain.Entities;

public class ProductEntity
{
    public long Id { get; set; }

    public string Name { get; set; } = String.Empty;

    public string? Description { get; set; }

    public bool Active { get; set; }

    public int BrandId { get; set; }

    public Brand Brand { get; set; }

    public ICollection<Rating>? Ratings { get; set; }

    public int CategoryId { get; set; }

    public Category Category { get; set; }

    public ICollection<ProductPiece>? ProductPieces { get; set; }

    [Column("created_at")]
    public DateTime CreatedAt { get; set; } = DateTime.Now;
}
