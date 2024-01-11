

using CleanArchitecture.Domain.Entities;

namespace CleanArchitecture.Application.Dtos.User;

public class GetUserDto
{
    public string Id { get; set; }
    public string UserName { get; set; } = String.Empty;
    public string Email { get; set; } = String.Empty;
    public string ProfilePicture { get; set; } = String.Empty;
    public string? PhoneNumber { get; set; }
    public List<string> Roles { get; set; }
    public DateTime RegistrationDate { get; set; }
    public ICollection<Rating>? Ratings { get; set; }
    public ICollection<Order>? Orders { get; set; }
}