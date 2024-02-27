namespace perfume_luxury_web_api.Controllers;

[Route("[controller]"), ApiController, Authorize]
public class FavoritesController(
    IFavoritesService favoritesService
) : ControllerBase
{
    [HttpPut("{productId:long}")]
    public async Task<IActionResult> Change([FromRoute] long productId)
    {
        await favoritesService.ChangeFavoriteStatus(User, productId);
        return Ok();
    }

    [HttpGet("all")]
    public async Task<IActionResult> Get()
        => Ok(await favoritesService.Get(User));
    
    [HttpGet]
    public async Task<IActionResult> GetPaged(
        [FromQuery] int page = 1,
        [FromQuery] int size = 10,
        [FromQuery] string? order = null,
        [FromQuery] string? select = null
    ) => Ok(await favoritesService.Get(User, page, size, order, select));
}
