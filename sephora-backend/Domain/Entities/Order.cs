using CleanArchitecture.Domain.Enums;

namespace CleanArchitecture.Domain.Entities;

public class Order
{
    [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }
    
    public DateTime Date { get; set; }
    
    public OrderStatus Status { get; set; }
    
    public int? DeliveryId { get; set; }
    
    public DeliveryEntity? DeliveryData { get; set; }
    public ICollection<ProductEntity>? Products { get; set; }
}
