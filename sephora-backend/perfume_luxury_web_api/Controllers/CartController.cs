namespace perfume_luxury_web_api.Controllers;

[Authorize, ApiController, Route("[controller]")]
public class CartController(ICartService cartService) : ControllerBase
{
    [HttpGet("all")]
    public async Task<IActionResult> Get()
        => Ok(await cartService.Get(User));
    
    [HttpGet]
    public async Task<IActionResult> GetPaged(
        [FromQuery] int pageNumber = 1,
        [FromQuery] int pageSize = 10
    ) => Ok(await cartService.Get(User, pageNumber, pageSize));

    [HttpGet("{id:long}"), Authorize(Roles = "Admin,Moderator")]
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
        await cartService.Delete(id);
        return Ok();
    }
}
