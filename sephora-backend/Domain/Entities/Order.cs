using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CleanArchitecture.Domain.Entities;

public class Order
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }
    
    public DateTime Date { get; set; }
    
    public decimal Total { get; set; }
    
    public int? DeliveryId { get; set; }
    
    public DeliveryEntity? DeliveryData { get; set; }
    public ICollection<ProductEntity>? Products { get; set; }
}
