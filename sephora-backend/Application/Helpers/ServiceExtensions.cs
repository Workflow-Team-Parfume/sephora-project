using CleanArchitecture.Application.MapperProfiles;
using CleanArchitecture.Application.Services.Implementations;
using CleanArchitecture.Application.Services.Interfaces;
using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.Extensions.DependencyInjection;

namespace CleanArchitecture.Application.Helpers;

public static class ServiceExtensions
{
    public static void AddAutoMapper(this IServiceCollection services)
    {
        services.AddAutoMapper(typeof(ApplicationProfile));
    }

    public static void AddCustomServices(this IServiceCollection services)
    {
        services.AddScoped<IAccountsService, AccountsService>();
        services.AddScoped<IJwtService, JwtService>();
        services.AddScoped<IProductService, ProductService>();
        services.AddScoped<IBrandService, BrandService>();
        services.AddScoped<IAmountService, AmountService>();
        services.AddScoped<IRoleService, RoleService>();
        services.AddScoped<ICategoryService, CategoryService>();
        services.AddScoped<ICartService, CartService>();
    }

    public static void AddValidators(this IServiceCollection services)
    {
        services.AddFluentValidationAutoValidation();
        services.AddValidatorsFromAssemblies(AppDomain.CurrentDomain.GetAssemblies());
    }
}