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

    public string Provider { get; set; } = String.Empty;

    // Ukrposhta
    public string? PostalCode { get; set; }
    
    public string? Country { get; set; } = "Ukraine";
    
    public string? Region { get; set; } // Область
    
    public string? District { get; set; } // Район
    
    public string? City { get; set; }
    
    public string? Street { get; set; }
    
    public string? Building { get; set; }
    
    public string? Apartment { get; set; }

    // Nova poshta
    public string? NovaPostWarehouse { get; set; }

    public string? UserId { get; set; }
    public UserEntity? User { get; set; }

    public string? UnauthedUserId { get; set; }
    public UnauthedUser? UnauthedUser { get; set; }
}
