namespace perfume_luxury_web_api.Controllers;

[Route("[controller]"), ApiController]
public class SearchController(
    ISearchService<ProductDto> searchService
) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> ExecuteSearch(
        [FromQuery] string q,
        [FromQuery] int page = 1,
        [FromQuery] int count = 10
    ) => Ok(await searchService.Search(q, page, count));
}
