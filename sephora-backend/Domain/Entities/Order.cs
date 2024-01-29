using CleanArchitecture.Domain.Enums;

namespace CleanArchitecture.Domain.Entities;

public class Order
{
    [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }
    
    public DateTime Date { get; set; }
    
    public OrderStatus Status { get; set; }
    
    [ForeignKey("DeliveryDataSet"), Column(Order = 0)]
    public long DeliveryId { get; set; }
    
    public DeliveryEntity Delivery { get; set; }
    public ICollection<OrderItem>? Products { get; set; }
}
