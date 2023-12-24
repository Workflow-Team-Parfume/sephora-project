using Microsoft.AspNetCore.Identity;

namespace Core.Entities;

public class UserEntity : IdentityUser
{
    public string? ProfilePicture { get; set; }

    public DateTime RegistrationDate { get; set; }

    public ICollection<Rating>? Ratings { get; set; }

    public ICollection<Order>? Orders { get; set; }

}
