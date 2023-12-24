using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure;

public static class ServiceExtensions
{
    public static void AddRepository(this IServiceCollection services)
    {
        services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
    }
    public static void AddDbContext(this IServiceCollection services, string connStr)
    {
        services.AddDbContext<PerfumeDbContext>(opt => opt.UseNpgsql(connStr));
    }
    public static void AddIdentity(this IServiceCollection services)
    {
        services.AddIdentity<UserEntity, IdentityRole>()
            .AddEntityFrameworkStores<PerfumeDbContext>()
            .AddDefaultTokenProviders();

    }
}