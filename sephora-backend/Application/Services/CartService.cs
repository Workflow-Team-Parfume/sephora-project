using System.Security.Claims;
using AutoMapper;
using CleanArchitecture.Application.Dtos.Cart;
using CleanArchitecture.Application.Interfaces;
using CleanArchitecture.Domain.Entities;
using Infrastructure.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace CleanArchitecture.Application.Services;

public class CartService(
    IRepository<CartItem> cartRepository,
    UserManager<UserEntity> userManager,
    IMapper mapper
) : ICartService
{
    private async Task<UserEntity?> GetUser(ClaimsPrincipal user)
        => await userManager.GetUserAsync(user);

    private async Task<UserEntity> GetUserOrThrow(ClaimsPrincipal user)
        => await GetUser(user) ?? throw new ArgumentException("User is not found", nameof(user));

    public async Task<IEnumerable<CartDto>> Get(ClaimsPrincipal user)
    {
        UserEntity userEntity = await GetUserOrThrow(user);
        return mapper.Map<IEnumerable<CartDto>>(
            (await cartRepository.GetAll())
            .Where(x => x.User.Id == userEntity.Id)
            .ToList());
    }

    public async Task<CartDto?> GetById(int id)
    {
        CartItem? entry = await cartRepository.GetById(id);
        return entry is null ? null : mapper.Map<CartDto>(entry);
    }

    public async Task Create(CreateCartDto cartDto, ClaimsPrincipal user)
    {
        UserEntity userEntity = await GetUserOrThrow(user);

        CartItem dbEntry = mapper.Map<CartItem>(cartDto);
        dbEntry.UserId = userEntity.Id;

        await cartRepository.Insert(dbEntry);
        await cartRepository.Save();
    }

    public async Task Delete(int id)
    {
        await cartRepository.Delete(id);
        await cartRepository.Save();
    }

    public async Task DeleteAll(ClaimsPrincipal user)
    {
        UserEntity userEntity = await GetUserOrThrow(user);

        await cartRepository.Delete((await cartRepository.GetAll())
            .Where(x => x.User.Id == userEntity.Id)
            .Select(x => x.Id)
            .ToList());
    }
}