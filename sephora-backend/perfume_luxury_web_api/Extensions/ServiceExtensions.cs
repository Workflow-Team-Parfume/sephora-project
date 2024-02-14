namespace perfume_luxury_web_api.Extensions;

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
        services.AddScoped<ICheckoutService, CheckoutService>();
        services.AddScoped<IDeliveryService, DeliveryService>();
        services.AddScoped<IPieceService, PieceService>();
        services.AddScoped<IRatingService, RatingService>();
    }
}
