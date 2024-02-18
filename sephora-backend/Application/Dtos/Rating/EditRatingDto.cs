namespace CleanArchitecture.Application.Dtos.Rating;

public record EditRatingDto{
    public long Id { get; set; }
    public int Rate { get; set; } // 1 to 5
    public string? Comment { get; set; }
    
    // The user and product will be registered in the backend
}
