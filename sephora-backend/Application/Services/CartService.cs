using CleanArchitecture.Application.Dtos.Cart;
using CleanArchitecture.Application.Interfaces;

namespace CleanArchitecture.Application.Services;

public class CartService : ICartService
{
    public Task<IEnumerable<CartDTO>> Get()
    {
        throw new NotImplementedException();
    }

    public Task<CartDTO?> GetById(int id)
    {
        throw new NotImplementedException();
    }

    public Task Create(CreateCartDTO cartDTO)
    {
        throw new NotImplementedException();
    }

    public Task Delete(int id)
    {
        throw new NotImplementedException();
    }
}