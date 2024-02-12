namespace CleanArchitecture.Application.Dtos.Rating;

public record EditRatingDto(
    int Id,
    int Rate, // 1 - 5
    string? Comment
    // The user and product id will be registered in the backend
);
