namespace Core.Entities;

public class ProductEntity
{
    public int Id { get; set; }

    public string Name { get; set; }

    public string? Description { get; set; }

    public string ImgPath { get; set; }

    public bool Active { get; set; }

    public int BrandId { get; set; }

    public Brand Brand { get; set; }

    public ICollection<Rating>? Ratings { get; set; }

    public ICollection<Order>? Orders { get; set; }

    public int CategoryId { get; set; }

    public Category Category { get; set; }

    public Care? Care { get; set; }

    public Parfume? Parfume { get; set; }

    public ParfumeBottled? ParfumeBottled { get; set; }

}
