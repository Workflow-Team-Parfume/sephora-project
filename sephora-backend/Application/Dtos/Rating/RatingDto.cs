namespace CleanArchitecture.Application.Dtos.Rating;

public record RatingDto(
    long Id,
    // string UserId, // change to user name + pfp
    ProductEntity? Product,
    decimal Rate,
    string? Comment
);
