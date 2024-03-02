namespace perfume_luxury_web_api.Controllers;

[ApiController, Route("[controller]")]
public class PiecesController(
    IPieceService pieceService
) : ControllerBase
{
    [HttpGet("all")]
    public async Task<IActionResult> GetAll()
        => Ok(await pieceService.Get().ToListAsync());
    
    [HttpGet]
    public async Task<IActionResult> GetPaged(
        [FromQuery] int page = 1,
        [FromQuery] int size = 10,
        [FromQuery] string? sort = null,
        [FromQuery] string? filter = null
    ) => Ok(await pieceService.Get(page, size, sort, filter));

    [HttpGet("{id:long}")]
    public async Task<IActionResult> GetById(long id)
        => Ok(await pieceService.GetById(id));

    [HttpPost, Authorize(Roles = "Admin,Moderator")]
    public async Task<IActionResult> Create(
        [FromForm] CreateProductPieceDto dto
    )
    {
        if (!ModelState.IsValid) 
            throw new ArgumentException("The model is not valid.");

        await pieceService.Create(dto);
        return Ok();
    }

    [HttpPut, Authorize(Roles = "Admin,Moderator")]
    public async Task<IActionResult> Update(
        [FromBody] EditProductPieceDto dto
    )
    {
        if (!ModelState.IsValid) 
            throw new ArgumentException("The model is not valid.");

        await pieceService.Edit(dto);
        return Ok();
    }

    [HttpDelete("{id:long}"), Authorize(Roles = "Admin,Moderator")]
    public async Task<IActionResult> Delete(long id)
    {
        await pieceService.Delete(id);
        return Ok();
    }
}
