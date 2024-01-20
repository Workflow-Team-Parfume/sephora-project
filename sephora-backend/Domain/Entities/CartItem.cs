using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CleanArchitecture.Domain.Entities;

/**
 * CartItem is a join table between UserEntity and ProductEntity. <br/>
 * It is used to store the products that a user has in their cart
 * and their quantities <br/><br/>
 *
 * <b>TODO: change primary ID to UUID string if needed</b>
 */
public class CartItem
{
    [Key]
    public int Id { get; set; }
    public int Quantity { get; set; }
    
    [ForeignKey("Users"), Column(Order = 0)]
    public string UserId { get; set; } = String.Empty;
    [ForeignKey("Products"), Column(Order = 1)]
    public int ProductId { get; set; }
    
    // navigation properties
    public UserEntity User { get; set; } = default!;
    public ProductEntity Product { get; set; } = default!;
}