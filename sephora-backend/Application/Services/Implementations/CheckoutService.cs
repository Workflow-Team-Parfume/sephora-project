using CleanArchitecture.Application.Dtos.Checkout;

namespace CleanArchitecture.Application.Services.Implementations;

public class CheckoutService(
    IRepository<Order> orderRepository,
    IRepository<CartItem> cartItemRepository,
    IDeliveryService deliveryService,
    UserManager<UserEntity> userManager,
    ICartService cartService,
    IMapper mapper
) : ICheckoutService
{
    public async Task CheckoutUnauthed(
        IEnumerable<CreateCartDto> cartItems,
        CreateDeliveryDto deliveryDto
    )
    {
        var delivery = mapper.Map<DeliveryEntity>(deliveryDto);
        await deliveryService.Create(deliveryDto);

        var items = cartItems.ToArray();
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

        await cartService.DeleteAll(user);
    }

    public async Task CancelOrder(long orderId)
    {
        throw new NotImplementedException();
    }

    public async Task<IEnumerable<CheckoutDto>> Get()
    {
        throw new NotImplementedException();
    }

    public async Task<CategoryDto?> GetById(int id)
    {
        throw new NotImplementedException();
    }

    public async Task Edit(CheckoutDto checkoutDto)
    {
        throw new NotImplementedException();
    }

    public async Task Delete(int id)
    {
        throw new NotImplementedException();
    }

    /**
     * <summary>
     * Places an order with the specified items and delivery ID. <br/>
     * (Core logic of the checkout process)
     * </summary>
     * <param name="items">The items that will be added to the order</param>
     * <param name="deliveryId">The ID of the delivery</param>
     */
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
