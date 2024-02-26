﻿namespace CleanArchitecture.Domain.Entities;

public class ProductEntity
{
    public long Id { get; set; }

    public string Name { get; set; } = String.Empty;

    public string Description { get; set; } = String.Empty;

    public bool Active { get; set; }

    public int BrandId { get; set; }

    public Brand Brand { get; set; } = default!;

    public ICollection<Rating> Ratings { get; set; } = [];

    public int CategoryId { get; set; }

    public Category Category { get; set; } = default!;

    public ICollection<ProductPiece> ProductPieces { get; set; } = [];

    [Column("created_at")]
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public ICollection<Characteristic> Characteristics { get; set; } = [];

    // TODO (just update it when a new rating is added)
    public decimal AverageRating { get; set; }
}
