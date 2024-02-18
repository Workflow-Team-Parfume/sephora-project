namespace CleanArchitecture.Application.Dtos.Rating;

public class RatingDto
{
    public long Id { get; set; }
    // public string? UserName { get; set; }
    // public string? UserPfp { get; set; }
    public ProductEntity? Product { get; set; }
    public decimal Rate { get; set; }
    public string? Comment { get; set; }
}
