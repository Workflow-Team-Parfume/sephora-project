using CleanArchitecture.Application.Dtos.Delivery;

namespace CleanArchitecture.Application.Services.Interfaces;

public interface ICheckoutService
{
    Task CheckoutUnauthed(IEnumerable<CreateCartDto> cartItems, CreateDeliveryDto delivery);
    Task CheckoutAuthed(IEnumerable<CartItem> cartItems, ClaimsPrincipal user);
}
