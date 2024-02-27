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

    private bool IsUserOwner(Rating rating, ClaimsPrincipal user)
        => rating.UserId == GetUserIdOrThrow(user);

    public IQueryable<RatingDto> Get()
        => mapper.Map<IQueryable<RatingDto>>(repository.GetAll());

    public async Task<RatingDto?> GetById(long id)
        => mapper.Map<RatingDto?>(await repository.GetById(id));

    public async Task Create(CreateRatingDto createRatingDto, ClaimsPrincipal user)
    {
        var rating = mapper.Map<Rating>(createRatingDto);
        rating.UserId = GetUserIdOrThrow(user);

        var product = await productRepository.GetById(createRatingDto.ProductId);
        if (product is null)
            throw new ArgumentException(
                $"Product with the id={{{createRatingDto.ProductId}}} is not found"
            );

        await repository.Insert(rating);

        decimal newRating = (
            product.Ratings
                .Aggregate(0m, (sum, next) => sum + next.Rate)
            + rating.Rate
        ) / (product.Ratings.LongCount() + 1);
        product.AverageRating = newRating;

        await repository.Save();
    }

    public async Task Edit(EditRatingDto editRatingDto, ClaimsPrincipal user)
    {
        var rating = await repository.GetById(editRatingDto.Id);
        var userId = GetUserIdOrThrow(user);
        if (rating?.UserId != userId)
            throw new UnauthorizedAccessException(
                "This user doesn't owns this record"
            );

        mapper.Map(editRatingDto, rating);
        await repository.Update(rating);
        await repository.Save();
    }

    public async Task Delete(long id, ClaimsPrincipal user)
    {
        var rating = await repository.GetById(id);
        var userId = GetUserIdOrThrow(user);
        if (rating?.UserId != userId)
            throw new UnauthorizedAccessException(
                "This user doesn't owns this record"
            );

        await repository.Delete(id);
        await repository.Save();
    }
}
