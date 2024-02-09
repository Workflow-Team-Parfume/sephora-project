namespace perfume_luxury_web_api.Controllers;

// TODO: Add logging

[Authorize, ApiController, Route("api/[controller]")]
public class CartController(ICartService cartService) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> Get()
    {
        return Ok(await cartService.Get(User));
    }

    [HttpGet("{id:long}"), Authorize(Roles = "Admin")]
    public async Task<IActionResult> Get([FromRoute] long id)
    {
        var item = await cartService.GetById(id);
        return Ok(item);
    }

    [HttpPut]
    public async Task<IActionResult> Add([FromBody] CreateCartDto cartItem)
    {
        await cartService.Create(cartItem, User);
        return Ok();
    }

    [HttpDelete("{id:long}")]
    public async Task<IActionResult> Remove([FromRoute] long id)
    {
        await cartService.Delete(id);
        return Ok();
    }
}
