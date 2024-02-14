namespace perfume_luxury_web_api.Controllers;

// TODO: Add logging

[Authorize, ApiController, Route("api/[controller]")]
public class CartController(ICartService cartService) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> Get()
        => Ok(await cartService.Get(User));

    [HttpGet("{id:long}"), Authorize(Roles = "Admin,Moderator")]
    public async Task<IActionResult> Get([FromRoute] long id)
        => Ok(await cartService.GetById(id));

    [HttpPost]
    public async Task<IActionResult> Add([FromBody] CreateCartDto cartItem)
    {
        if (!ModelState.IsValid) return BadRequest();

        await cartService.Create(cartItem, User);
        return Ok();
    }
    
    [HttpPut]
    public async Task<IActionResult> Update([FromBody] CartDto cartItem)
    {
        try
        {
            if (!ModelState.IsValid) throw new Exception();

            await cartService.Update(cartItem, User);
            return Ok();
        }
        catch (UnauthorizedAccessException ex)
        {
            return Unauthorized(new
            {
                Status = "400 Bad Request",
                Message = ex.Message
            });
        }
        catch (Exception ex)
        {
            return BadRequest(new
            {
                Status = "400 Bad Request",
                Message = ex.Message
            });
        }
    }

    [HttpDelete("{id:long}")]
    public async Task<IActionResult> Remove([FromRoute] long id)
    {
        await cartService.Delete(id);
        return Ok();
    }
}
