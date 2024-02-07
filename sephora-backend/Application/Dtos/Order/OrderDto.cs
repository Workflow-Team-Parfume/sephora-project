namespace CleanArchitecture.Application.Dtos.Order;

public class OrderDto
{
    public long Id { get; set; }
    
    public DateTime Date { get; set; }
    
    public OrderStatus Status { get; set; }
    
    public long DeliveryId { get; set; }
    
    public ICollection<OrderDto> Products { get; set; }
}
