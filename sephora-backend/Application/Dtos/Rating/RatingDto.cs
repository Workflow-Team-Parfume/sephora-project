namespace CleanArchitecture.Application.Dtos.Rating;

public class RatingDto
{
    public long Id { get; set; }
    // TODO: add user info mapping
    // public string? UserName { get; set; }
    // public string? UserPfp { get; set; }
    public ProductDto Product { get; set; } = default!;
    public decimal Rate { get; set; }
    public string? Comment { get; set; }
}
