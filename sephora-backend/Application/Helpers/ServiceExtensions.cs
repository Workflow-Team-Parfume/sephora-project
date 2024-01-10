﻿using CleanArchitecture.Application.Interfaces;
using CleanArchitecture.Application.Services;
using FluentValidation;
using FluentValidation.AspNetCore;
using Infrastructure.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace CleanArchitecture.Application.Helpers;

public static class ServiceExtensions
{
    public static void AddAutoMapper(this IServiceCollection services)
    {
        services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
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
        services.AddScoped<IParfumeService, ParfumeService>();
    }

    public static void AddValidators(this IServiceCollection services)
    {
        services.AddFluentValidationAutoValidation();
        services.AddValidatorsFromAssemblies(AppDomain.CurrentDomain.GetAssemblies());
    }
}