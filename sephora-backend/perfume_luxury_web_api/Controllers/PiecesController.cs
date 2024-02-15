namespace perfume_luxury_web_api.Controllers;

// TODO: Authorize admins and mods only on the whole controller
[ApiController, Route("[controller]")]
public class PiecesController(
    IPieceService pieceService
) : ControllerBase
{
    [HttpGet("all")]
    public async Task<IActionResult> GetAll()
        => Ok(await pieceService.Get());
    
    [HttpGet]
    public async Task<IActionResult> GetPaged(
        [FromQuery] int page = 1,
        [FromQuery] int size = 10
    ) => Ok(await pieceService.Get(page, size, false));

    [HttpGet("{id:long}")]
    public async Task<IActionResult> GetById(long id)
        => Ok(await pieceService.GetById(id));

    [HttpPost]
    public async Task<IActionResult> Create(
        [FromForm] CreateProductPieceDto dto
    )
    {
        if (!ModelState.IsValid) 
            throw new ArgumentException("The model is not valid.");

        await pieceService.Create(dto);
        return Ok();
    }

    [HttpPut]
    public async Task<IActionResult> Update(
        [FromBody] EditProductPieceDto dto
    )
    {
        if (!ModelState.IsValid) 
            throw new ArgumentException("The model is not valid.");

        await pieceService.Edit(dto);
        return Ok();
    }

    [HttpDelete("{id:long}")]
    public async Task<IActionResult> Delete(long id)
    {
        await pieceService.Delete(id);
        return Ok();
    }
}
