namespace perfume_luxury_web_api.Controllers;

[ApiController, Route("[controller]")]
public class RatingController(IRatingService ratingService) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<RatingDto>>> Get()
    {
        var ratings = await ratingService.Get();
        return Ok(ratings);
    }

    [HttpGet("{id:long}")]
    public async Task<ActionResult<RatingDto>> GetById(long id)
    {
        var rating = await ratingService.GetById(id);
        if (rating is null)
            throw new HttpException(
                $"The rating with ID={{{id}}} was not found", 
                HttpStatusCode.NotFound
                );
        return Ok(rating);
    }

    [HttpPost, Authorize]
    public async Task<ActionResult> Create(CreateRatingDto createRatingDto)
    {
        if (!ModelState.IsValid)
            throw new ArgumentException("The model is not valid.");

        await ratingService.Create(createRatingDto, User);
        return Ok();
    }

    [HttpPut("{id:long}"), Authorize]
    public async Task<ActionResult> Edit(long id, EditRatingDto editRatingDto)
    {
        if (!ModelState.IsValid)
            throw new ArgumentException("The model is not valid.");

        await ratingService.Edit(editRatingDto, User);
        return Ok();
    }

    [HttpDelete("{id:long}"), Authorize]
    public async Task<ActionResult> Delete(long id)
    {
        await ratingService.Delete(id, User);
        return Ok();
    }
}
