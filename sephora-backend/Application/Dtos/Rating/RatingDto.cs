namespace CleanArchitecture.Application.Dtos.Rating;

public record RatingDto(
    int Id,
    string UserId,
    ProductEntity? Product,
    decimal Rate,
    string? Comment
);
