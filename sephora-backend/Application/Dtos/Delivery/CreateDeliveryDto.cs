namespace CleanArchitecture.Application.Dtos.Delivery;

public class CreateDeliveryDto
{
    public long Id { get; set; }
    public string Address { get; set; } = String.Empty;
    public string Provider { get; set; } = String.Empty;
    
    /* User is not required, because
     * it is not needed when creating a delivery.
     * If is user is authed,
     * their ID will be fetched from the token in the backend.
    */
}
