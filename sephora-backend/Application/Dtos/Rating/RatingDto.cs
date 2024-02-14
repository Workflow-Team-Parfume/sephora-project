namespace CleanArchitecture.Application.Dtos.Rating;

public record RatingDto(
    long Id,
    string UserId,
    ProductEntity? Product,
    decimal Rate,
    string? Comment
);
