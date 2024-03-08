namespace perfume_luxury_web_api.Controllers;

[Authorize, ApiController, Route("[controller]")]
public class CartController(ICartService cartService) : ControllerBase
{
    [HttpGet("all")]
    public async Task<IActionResult> Get()
        => Ok(await cartService.Get(User).ToListAsync());
    
    [HttpGet]
    public async Task<IActionResult> GetPaged(
        [FromQuery] int page = 1,
        [FromQuery] int size = 10,
        [FromQuery] string? order = null,
        [FromQuery] string? select = null
    ) => Ok(await cartService.Get(User, page, size, order, select));

    [HttpGet("{id:long}"), Authorize(Roles = "SudoAdmin,Admin")]
    public async Task<IActionResult> Get([FromRoute] long id)
        => Ok(await cartService.GetById(id));

    [HttpPost]
    public async Task<IActionResult> Add([FromBody] CreateCartDto cartItem)
    {
        if (!ModelState.IsValid) 
            throw new ArgumentException("The model is not valid.");

        await cartService.Create(cartItem, User);
        return Ok();
    }
    
    [HttpPut]
    public async Task<IActionResult> Update([FromBody] CartDto cartItem)
    {
        if (!ModelState.IsValid) 
            throw new ArgumentException("The model is not valid.");

        await cartService.Update(cartItem, User);
        return Ok();
    }

    [HttpDelete("{id:long}")]
    public async Task<IActionResult> Remove([FromRoute] long id)
    {
        await cartService.Delete(id, User);
        return Ok();
    }
}
