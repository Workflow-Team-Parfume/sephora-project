namespace CleanArchitecture.Application.Services.Interfaces;

public interface ICheckoutService
{
    Task CheckoutUnauthed(IEnumerable<CreateCartDto> cartItems, CreateDeliveryDto delivery);
    Task CheckoutAuthed(ClaimsPrincipal user);
}
