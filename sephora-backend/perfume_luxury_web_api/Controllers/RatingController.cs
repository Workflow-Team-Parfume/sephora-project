namespace perfume_luxury_web_api.Controllers;

[ApiController, Route("api/[controller]")]
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
        return rating is null
            ? NotFound(new ErrorStatus(
                "404 Not Found",
                $"The rating with ID={{{id}}} was not found"
            ))
            : Ok(rating);
    }

    [HttpPost, Authorize]
    public async Task<ActionResult> Create(CreateRatingDto createRatingDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(new ErrorStatus(
                "400 Bad Request",
                "The model is invalid"
            ));

        await ratingService.Create(createRatingDto, User);
        return Ok();
    }

    [HttpPut("{id:long}"), Authorize]
    public async Task<ActionResult> Edit(long id, EditRatingDto editRatingDto)
    {
        if (!ModelState.IsValid)
            return BadRequest(new ErrorStatus(
                "400 Bad Request",
                "The model is invalid"
                ));

        try
        {
            await ratingService.Edit(editRatingDto, User);
            return Ok();
        }
        catch (UnauthorizedAccessException ex)
        {
            return Unauthorized(new ErrorStatus("401 Unauthorized", ex.Message));
        }
    }

    [HttpDelete("{id:long}"), Authorize]
    public async Task<ActionResult> Delete(long id)
    {
        try
        {
            await ratingService.Delete(id, User);
            return Ok();
        }
        catch (UnauthorizedAccessException ex)
        {
            return Unauthorized(new ErrorStatus("401 Unauthorized", ex.Message));
        }
    }
}
