namespace CleanArchitecture.Application.Dtos.Rating;

public record CreateRatingDto(
    long ProductId,
    int Rate, // 1 - 5
    string? Comment
    // The user will be registered in the backend
);
