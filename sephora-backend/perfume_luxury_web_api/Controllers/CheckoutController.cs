namespace perfume_luxury_web_api.Controllers;

[ApiController, Route("/api/[controller]")]
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
        => await CheckoutCore(async () =>
            await checkoutService.CheckoutUnauthed(
                dto.CartItems,
                dto.DeliveryDto
            ));

    [HttpPost, Authorize]
    public async Task<IActionResult> Checkout()
        => await CheckoutCore(async () =>
            await checkoutService.CheckoutAuthed(User)
        );

    [HttpPut("cancel/{orderId:long}"), Authorize]
    public async Task<IActionResult> CancelOrder(long orderId)
        => await CheckoutCore(async () =>
            await checkoutService.CancelOrder(orderId, User)
        );

    [HttpPut("admin/status"), Authorize(Roles = "Admin")]
    public async Task<IActionResult> ChangeStatus(
        [FromBody] ChangeStatusDto dto
    ) => await CheckoutCore(async () =>
        await checkoutService.ChangeStatus(dto)
    );

    [HttpGet("admin/{orderId:long}"), Authorize(Roles = "Admin")]
    public async Task<IActionResult> GetById(long orderId)
        => await CheckoutCore(async () =>
            Ok(await checkoutService.GetById(orderId))
        );

    [HttpGet("admin/all"), Authorize(Roles = "Admin")]
    public async Task<IActionResult> GetAll()
        => await CheckoutCore(async () =>
            Ok(await checkoutService.Get())
        );

    // Manipulate status of orders via this method in admin panel
    [HttpPut("admin"), Authorize(Roles = "Admin")]
    public async Task<IActionResult> Edit([FromBody] OrderDto orderDto)
        => await CheckoutCore(async () =>
        {
            if (!ModelState.IsValid)
                throw new Exception("The model is invalid");

            await checkoutService.Edit(orderDto);
        });

    [HttpDelete("admin/{orderId:long}"), Authorize(Roles = "Admin")]
    public async Task<IActionResult> Delete(long orderId)
        => await CheckoutCore(async () =>
            await checkoutService.Delete(orderId)
        );

    private async Task<IActionResult> CheckoutCore(Func<Task> action)
    {
        try
        {
            await action();
            return Ok();
        }
        catch (SecurityException ex) // 401
        {
            return Unauthorized(new ErrorStatus("401 Unauthorized", ex.Message));
        }
        catch (NotSupportedException) // 403
        {
            
            return Forbid();
        }
        catch (Exception ex) // 400
        {
            return BadRequest(new ErrorStatus("400 Bad Request", ex.Message));
        }
    }
}
