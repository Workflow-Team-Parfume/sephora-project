namespace CleanArchitecture.Application.Dtos.Delivery;

// TODO: Implement
public class DeliveryDto
{
    public long Id { get; set; }
    public string Address { get; set; } = String.Empty;
    public string Provider { get; set; } = String.Empty;
    
    public string? UserId { get; set; }
    public string? UserName { get; set; }
    public string? UserEmail { get; set; }
    public string? UserPhoneNumber { get; set; }
}
