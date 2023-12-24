namespace Core.Entities;

public class Rating
{
    public int Id { get; set; }

    public string UserId { get; set; }

    public UserEntity User { get; set; }

    public ProductEntity? Product { get; set; }

    public int? ProductId { get; set; }

    public decimal Rate{ get; set; }

}
