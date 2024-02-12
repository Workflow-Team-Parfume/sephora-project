namespace CleanArchitecture.Application.Dtos.Rating;

public record EditRatingDto(
    long Id,
    int Rate, // 1 - 5
    string? Comment
    // The user and product id will be registered in the backend
);
