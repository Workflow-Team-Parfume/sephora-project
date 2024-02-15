namespace perfume_luxury_web_api.Controllers;

[ApiController, Route("[controller]")]
public class CheckoutController(
    ICheckoutService checkoutService
) : ControllerBase
{
    /**
     * Create an order (for unauthenticated users and admins,
     * who want to create an order for someone else,
     * like for a customer who called them)
     */
    [HttpPost("unauthed")]
    public async Task<IActionResult> Checkout([FromBody] CheckoutDto dto)
    {
        await checkoutService.CheckoutUnauthed(dto.CartItems, dto.DeliveryDto);
        return Ok();
    }

    [HttpPost, Authorize]
    public async Task<IActionResult> Checkout()
    {
        await checkoutService.CheckoutAuthed(User);
        return Ok();
    }

    [HttpPut("cancel/{orderId:long}"), Authorize]
    public async Task<IActionResult> CancelOrder(long orderId)
    {
        await checkoutService.CancelOrder(orderId, User);
        return Ok();
    }

    [HttpPut("admin/status"), Authorize(Roles = "Admin,Moderator")]
    public async Task<IActionResult> ChangeStatus([FromBody] ChangeStatusDto dto)
    {
        await checkoutService.ChangeStatus(dto);
        return Ok();
    }

    [HttpGet("admin/{orderId:long}"), Authorize(Roles = "Admin,Moderator")]
    public async Task<IActionResult> GetById(long orderId)
        => Ok(await checkoutService.GetById(orderId));

    [HttpGet("admin/all"), Authorize(Roles = "Admin,Moderator")]
    public async Task<IActionResult> GetAll()
        => Ok(await checkoutService.Get());

    // Manipulate status of orders via this method in admin panel
    [HttpPut("admin"), Authorize(Roles = "Admin,Moderator")]
    public async Task<IActionResult> Edit([FromBody] OrderDto orderDto)
    {
        if (!ModelState.IsValid) 
            throw new ArgumentException("The model is not valid.");

        await checkoutService.Edit(orderDto);
        return Ok();
    }

    [HttpDelete("admin/{orderId:long}"), Authorize(Roles = "Admin,Moderator")]
    public async Task<IActionResult> Delete(long orderId)
    {
        await checkoutService.Delete(orderId);
        return Ok();
    }
}
