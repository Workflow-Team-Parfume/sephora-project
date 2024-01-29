namespace CleanArchitecture.Domain.Entities;

public class Order
{
    
    public int Id { get; set; }
    
    public DateTime Date { get; set; }
    
    public decimal Total { get; set; }
    
    public string UserId { get; set; } = String.Empty;
    
    public UserEntity User { get; set; }
    
    public ICollection<ProductEntity>? Products { get; set; }
}
