namespace CleanArchitecture.Application.Services.Interfaces;

public interface IRatingService
{
    Task<IEnumerable<RatingDto>> Get();
    Task<RatingDto?> GetById(long id);
    Task Create(CreateRatingDto createRatingDto, ClaimsPrincipal user);
    Task Edit(EditRatingDto editRatingDto, ClaimsPrincipal user);
    Task Delete(long id, ClaimsPrincipal user);
}
