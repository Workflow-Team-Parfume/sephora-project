namespace CleanArchitecture.Domain.Entities;

/*
 * TODO: Redo this class if needed, because
 * this is a placeholder for the real entity (not fully implemented yet)
 *
 * (Like adding a phone number and email)
 */
public class DeliveryEntity
{
    [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }
    public string Address { get; set; } = String.Empty;
    public string Provider { get; set; } = String.Empty;
    
    public string? UserId { get; set; }
    public UserEntity? User { get; set; }
}
