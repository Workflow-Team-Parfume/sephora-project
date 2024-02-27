namespace CleanArchitecture.Domain.Entities;

public class UserEntity : IdentityUser
{
    public string? ProfilePicture { get; set; }
    public DateTime RegistrationDate { get; set; } = DateTime.UtcNow;
    // TODO: decide if a change to nullable type is a good idea
    public long DeliveryDataId { get; set; }
    public DeliveryEntity DeliveryData { get; set; }
    public ICollection<Rating>? Ratings { get; set; }
    public ICollection<Order>? Orders { get; set; }
    public ICollection<CartItem>? CartItems { get; set; }
}
