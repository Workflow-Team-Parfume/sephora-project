namespace CleanArchitecture.Domain.Entities;

public class Category
{
    public int Id { get; set; }

    public string Name { get; set; } = String.Empty;

    public ICollection<ProductEntity> Products { get; set;} = [];

}
