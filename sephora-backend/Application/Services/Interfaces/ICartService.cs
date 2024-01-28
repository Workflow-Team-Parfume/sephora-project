using System.Security.Claims;
using CleanArchitecture.Application.Dtos.Cart;

namespace CleanArchitecture.Application.Services.Interfaces;

public interface ICartService
{
    Task<IEnumerable<CartDto>> Get(ClaimsPrincipal user);
    Task<CartDto?> GetById(int id);
    Task Create(CreateCartDto cartDto, ClaimsPrincipal user);
    Task Delete(int id);
    Task DeleteAll(ClaimsPrincipal user);
}