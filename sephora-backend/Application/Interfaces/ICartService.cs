using CleanArchitecture.Application.Dtos.Cart;

namespace CleanArchitecture.Application.Interfaces;

public interface ICartService
{
    Task<IEnumerable<CartDto>> Get();
    Task<CartDto?> GetById(int id);
    Task Create(CreateCartDto cartDto);
    Task Delete(int id);
}