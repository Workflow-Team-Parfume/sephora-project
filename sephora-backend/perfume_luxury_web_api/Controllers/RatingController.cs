namespace perfume_luxury_web_api.Controllers;

[ApiController, Route("[controller]")]
public class RatingController(IRatingService ratingService) : ControllerBase
{
    [HttpGet("all")]
    public async Task<IActionResult> Get()
    {
        var ratings = await ratingService.Get();
        return Ok(ratings);
    }
    
    // TODO: Add filtering by product ID
    [HttpGet]
    public async Task<IActionResult> GetPaged(
        [FromQuery] int pageNumber = 1,
        [FromQuery] int pageSize = 10
    )
    {
        var ratings = await ratingService.Get(pageNumber, pageSize, false);
        return Ok(ratings);
    }

    [HttpGet("{id:long}")]
    public async Task<IActionResult> GetById(long id)
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
    public async Task<IActionResult> Create(CreateRatingDto createRatingDto)
    {
        if (!ModelState.IsValid)
            throw new ArgumentException("The model is not valid.");

        await ratingService.Create(createRatingDto, User);
        return Ok();
    }

    [HttpPut("{id:long}"), Authorize]
    public async Task<IActionResult> Edit(long id, EditRatingDto editRatingDto)
    {
        if (!ModelState.IsValid)
            throw new ArgumentException("The model is not valid.");

        await ratingService.Edit(editRatingDto, User);
        return Ok();
    }

    [HttpDelete("{id:long}"), Authorize]
    public async Task<IActionResult> Delete(long id)
    {
        await ratingService.Delete(id, User);
        return Ok();
    }
}
