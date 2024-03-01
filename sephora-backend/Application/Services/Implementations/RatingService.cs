namespace CleanArchitecture.Application.Services.Implementations;

public class RatingService(
    IRepository<Rating> repository,
    IRepository<ProductEntity> productRepository,
    UserManager<UserEntity> userManager,
    IMapper mapper
) : IRatingService
{
    private string GetUserIdOrThrow(ClaimsPrincipal user)
        => userManager.GetUserId(user)
           ?? throw new UnauthorizedAccessException(
               ErrorMessages.UserNotFound
           );

    private static void CheckRating(int rate)
    {
        if (rate is < 1 or > 5)
            throw new ArgumentException(
                "Rate should be between 1 and 5"
            );
    }

    private void ThrowIfUserIsNotOwner(Rating? rating, ClaimsPrincipal user)
    {
        if (rating?.UserId == GetUserIdOrThrow(user))
            throw new UnauthorizedAccessException(
                "This user doesn't owns this record"
            );
    }

    private async Task SetNewRating(long productId, decimal newRating, int newRatingsCount)
    {
        var product = await productRepository.GetById(productId);
        if (product is null)
            throw new ArgumentException(
                $"Product with the id={{{productId}}} is not found"
            );

        product.AverageRating = (
            product.Ratings.Aggregate(0m, (sum, next) => sum + next.Rate)
            + newRating
        ) / (product.Ratings.LongCount() + newRatingsCount);

        await productRepository.Update(product);
    }

    public IQueryable<RatingDto> Get()
        => mapper.Map<IQueryable<RatingDto>>(repository.GetAll());

    public async Task<RatingDto?> GetById(long id)
        => mapper.Map<RatingDto?>(await repository.GetById(id));

    public async Task Create(CreateRatingDto createRatingDto, ClaimsPrincipal user)
    {
        CheckRating(createRatingDto.Rate);
        
        var rating = mapper.Map<Rating>(createRatingDto);
        rating.UserId = GetUserIdOrThrow(user);

        await repository.Insert(rating);
        await SetNewRating(createRatingDto.ProductId, createRatingDto.Rate, 1);
        await repository.Save();
    }

    public async Task Edit(EditRatingDto editRatingDto, ClaimsPrincipal user)
    {
        CheckRating(editRatingDto.Rate);
        
        var rating = await repository.GetById(editRatingDto.Id);
        ThrowIfUserIsNotOwner(rating, user);

        mapper.Map(editRatingDto, rating);
        await repository.Update(rating!);
        await SetNewRating(rating!.ProductId, editRatingDto.Rate - rating.Rate, 0);
        await repository.Save();
    }

    public async Task Delete(long id, ClaimsPrincipal user)
    {
        var rating = await repository.GetById(id);
        ThrowIfUserIsNotOwner(rating, user);

        await repository.Delete(id);
        await SetNewRating(rating!.ProductId, -rating.Rate, -1);
        await repository.Save();
    }
}
