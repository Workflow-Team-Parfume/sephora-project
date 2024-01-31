namespace perfume_luxury_web_api.Controllers;

public class CheckoutController(
    ICheckoutService checkoutService
) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> Checkout(
        [FromBody] IEnumerable<CreateCartDto> cartItems,
        [FromBody] CreateDeliveryDto deliveryDto
    ) => await CheckoutCore(async () =>
        await checkoutService.CheckoutUnauthed(cartItems, deliveryDto)
    );

    [HttpPost, Authorize]
    public async Task<IActionResult> Checkout()
        => await CheckoutCore(async () =>
            await checkoutService.CheckoutAuthed(User)
        );

    private async Task<IActionResult> CheckoutCore(Func<Task> action)
    {
        try
        {
            await action();
            return Ok();
        }
        catch (ArgumentException ex)
        {
            return BadRequest(new
            {
                status = "400 Bad Request",
                message = ex.Message
            });
        }
        catch (SecurityException ex)
        {
            return Unauthorized(new
            {
                status = "401 Unauthorized",
                message = ex.Message
            });
        }
    }
}
