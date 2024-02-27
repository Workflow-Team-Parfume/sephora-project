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
}
