namespace CleanArchitecture.Application.Services.Interfaces;

public interface ICartService
{
    /**
     * <summary>Get all cart items of the specified user</summary>
     * <param name="user">The user to get cart items of</param>
     * <returns>The cart items of the specified user</returns>
     */
    Task<IEnumerable<CartDto>> Get(ClaimsPrincipal user);
    
    /**
     * <summary>Get the cart item by its id</summary>
     * <param name="id">The id of the cart item</param>
     * <returns>The cart item with the specified id</returns>
     */
    Task<CartDto?> GetById(long id);
    
    /**
     * <summary>Creates a new cart item</summary>
     * <param name="cartDto">The cart item to create</param>
     * <param name="user">The user to create the cart item for</param>
     */
    Task Create(CreateCartDto cartDto, ClaimsPrincipal user);
    
    /**
     * <summary>Edits the specified cart item</summary>
     * <param name="id">The cart item ID to edit</param>
     */
    Task Delete(long id);
    
    /**
     * <summary>Cleanses the cart of a user</summary>
     * <param name="user">The user whose cart will be cleared</param>
     */
    Task DeleteAll(ClaimsPrincipal user);
}
