using CleanArchitecture.Application.Dtos.Checkout;

namespace CleanArchitecture.Application.Services.Interfaces;

public interface ICheckoutService
{
    // Task Create(CreateCheckoutDto checkoutDto);

    /**
     * <summary>
     * Places an order for an unauthenticated user. <br/>
     * It takes the items from the request and creates an order with them. <br/>
     * It also creates a delivery entry with the specified data. <br/>
     * </summary>
     * <param name="cartItems">The items that will be added to the order</param>
     * <param name="delivery">The data of the delivery</param>
     */
    Task CheckoutUnauthed(IEnumerable<CreateCartDto> cartItems, CreateDeliveryDto delivery);

    /**
     * Places an order for the specified user. <br/>
     * It takes the items from the user's cart and
     * creates an order with them. <br/>
     */
    Task CheckoutAuthed(ClaimsPrincipal user);

    // ADMIN ONLY

    /**
     * <summary>
     * Cancels the order with the specified ID. <br/>
     * (Sets the status to CANCELLED)
     * </summary>
     * <param name="orderId">The ID of an order that will be cancelled</param>
     */
    Task CancelOrder(long orderId);

    /**
     * <summary>Gets all orders.</summary>
     * <returns>A list of all orders.</returns>
     */
    Task<IEnumerable<CheckoutDto>> Get();

    /**
     * <summary>Gets the order with the specified ID.</summary>
     * <param name="id">The ID of an order that will be returned</param>
     * <returns>The order with the specified ID.</returns>
     */
    Task<CategoryDto?> GetById(int id);

    /**
     * <summary>Creates a new order.</summary>
     * <param name="checkoutDto">The data of the new order</param>
     */
    Task Edit(CheckoutDto checkoutDto);

    /**
     * <summary>Deletes the order with the specified ID.</summary>
     * <param name="id">The ID of an order that will be deleted</param>
     */
    Task Delete(int id);
}
