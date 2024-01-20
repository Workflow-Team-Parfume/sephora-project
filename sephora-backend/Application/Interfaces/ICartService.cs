using CleanArchitecture.Application.Dtos.Cart;

namespace CleanArchitecture.Application.Interfaces;

public interface ICartService
{
    Task<IEnumerable<CartDTO>> Get();
    Task<CartDTO?> GetById(int id);
    Task Create(CreateCartDTO cartDTO);
    Task Delete(int id);
}