using CleanArchitecture.Application.Dtos.Cart;
using CleanArchitecture.Application.Interfaces;

namespace CleanArchitecture.Application.Services;

public class CartService : ICartService
{
    public Task<IEnumerable<CartDto>> Get()
    {
        throw new NotImplementedException();
    }

    public Task<CartDto?> GetById(int id)
    {
        throw new NotImplementedException();
    }

    public Task Create(CreateCartDto cartDto)
    {
        throw new NotImplementedException();
    }

    public Task Delete(int id)
    {
        throw new NotImplementedException();
    }
}