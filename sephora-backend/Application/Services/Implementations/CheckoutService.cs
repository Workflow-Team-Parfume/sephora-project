using System.Security;
using CleanArchitecture.Application.Dtos.Delivery;
using CleanArchitecture.Domain.Enums;

namespace CleanArchitecture.Application.Services.Implementations;

public class CheckoutService(
    IRepository<Order> orderRepository,
    IRepository<CartItem> cartItemRepository,
    IRepository<DeliveryEntity> deliveryRepository,
    UserManager<UserEntity> userManager,
    IMapper mapper
) : ICheckoutService
{
    public async Task CheckoutUnauthed(
        IEnumerable<CreateCartDto> cartItems,
        CreateDeliveryDto deliveryDto
    )
    {
        var items = cartItems.ToArray();

        var delivery = mapper.Map<DeliveryEntity>(deliveryDto);
        await deliveryRepository.Insert(delivery);
        await deliveryRepository.Save();

        await PlaceOrder(mapper.Map<CartItem[]>(items), delivery.Id);
    }

    public async Task CheckoutAuthed(ClaimsPrincipal user)
    {
        UserEntity? userEntity = await userManager.GetUserAsync(user);
        if (userEntity is null)
            throw new SecurityException("The specified user is not found");

        var spec = new CartItems.GetByUserId(userEntity.Id);
        CartItem[] items
            = (await cartItemRepository.GetListBySpec(spec)).ToArray();

        await PlaceOrder(items, userEntity.DeliveryDataId);

        foreach (var item in items)
            await cartItemRepository.Delete(item.Id);
        await cartItemRepository.Save();
    }

    private async Task PlaceOrder(CartItem[] items, long deliveryId)
    {
        if (items.Length == 0)
            throw new ArgumentException(
                "The cart is empty",
                nameof(items)
            );
        
        var order = new Order
        {
            Date = DateTime.Now,
            Status = OrderStatus.PENDING,
            DeliveryId = deliveryId,
            Products = items.Select(cartItem => new OrderItem
            {
                Quantity = cartItem.Quantity,
                ProductPieceId = cartItem.ProductPieceId
            }).ToList()
        };

        await orderRepository.Insert(order);
        await orderRepository.Save();
    }
}
