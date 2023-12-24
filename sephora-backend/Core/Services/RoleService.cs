using Core.Helpers;
using Core.Interfaces;
using Core.Resources;
using Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace Core.Services;

public class RoleService(
    RoleManager<IdentityRole> roleManager, 
    UserManager<UserEntity> userManager)
    : IRoleService
{
    public async Task Create(string roleName)
    {
        if (!await roleManager.RoleExistsAsync(roleName))
        {
            var role = new IdentityRole(roleName);
            await roleManager.CreateAsync(role);
        }
    }
    public async Task Delete(string roleName)
    {
        var role = await roleManager.FindByNameAsync(roleName);

        if (role != null)
        {
            var usersInRole = await userManager.GetUsersInRoleAsync(role.Name);
            foreach (var user in usersInRole)
            {
                await userManager.RemoveFromRoleAsync(user, role.Name);
            }

            await roleManager.DeleteAsync(role);
        }
    }
    public async Task AddToRole(string userId, string roleName)
    {
        var user = await userManager.FindByIdAsync(userId);

        if (user != null)
        {
            await userManager.AddToRoleAsync(user, roleName);
        }
    }
    public async Task RemoveFromRole(string userId, string roleName)
    {
        var user = await userManager.FindByIdAsync(userId);

        if (user != null)
        {
            await userManager.RemoveFromRoleAsync(user, roleName);
        }
    }
    public async Task<IEnumerable<IdentityRole>> GetAll()
    {
        var roles = await roleManager.Roles.ToListAsync();
        return roles;
    }
    public async Task<IEnumerable<string>> GetByUserId(string userId)
    {
        var user = await userManager.FindByIdAsync(userId);
        if (user == null)
            throw new HttpException(ErrorMessages.UserByIDNotFound, HttpStatusCode.NotFound);

        var roles = await userManager.GetRolesAsync(user);
        return roles;
    }
}