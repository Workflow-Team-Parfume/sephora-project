namespace Core.Entities;

public class ParfumeBottled
{
    public int Id { get; set; }

    public int LeftMl { get; set; }

    public decimal PricePerMl { get; set; }

    public int ProductId { get; set; }

    public ProductEntity Product { get; set; }
    //add minus ml obj with date and order
}