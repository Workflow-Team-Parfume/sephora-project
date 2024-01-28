using Microsoft.AspNetCore.Identity;

namespace CleanArchitecture.Domain.Entities;

public class UserEntity : IdentityUser
{
    public string? ProfilePicture { get; set; }

    public DateTime RegistrationDate { get; set; }

    public long DeliveryDataId { get; set; }
    public DeliveryEntity DeliveryData { get; set; } = default!;
    
    public ICollection<Rating>? Ratings { get; set; }

    public ICollection<Order>? Orders { get; set; }
    
    public ICollection<CartItem>? CartItems { get; set; }
}
