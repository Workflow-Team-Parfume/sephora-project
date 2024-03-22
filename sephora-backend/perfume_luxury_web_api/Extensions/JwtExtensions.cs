using Microsoft.AspNetCore.Authentication.Certificate;
using Microsoft.OpenApi.Models;

namespace perfume_luxury_web_api.Extensions;

public static class JwtExtensions
{
    public static void AddJwt(
        this IServiceCollection services,
        JwtOptions jwtOpts
    )
    {
        if (!jwtOpts.AreValid)
            throw new SecurityException("Invalid JWT options provided");

        services.AddAuthentication(
        CertificateAuthenticationDefaults.AuthenticationScheme)
        .AddCertificate();

        services.AddAuthentication(options =>
        {

            options.DefaultAuthenticateScheme
                = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme
                = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultScheme
                = JwtBearerDefaults.AuthenticationScheme;
        }).AddJwtBearer(o =>
        {
            o.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidateAudience = false,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                ValidIssuer = jwtOpts.Issuer,
                IssuerSigningKey = new SymmetricSecurityKey(
                    Encoding.UTF8.GetBytes(jwtOpts.Key ?? String.Empty)),
                ClockSkew = TimeSpan.Zero
            };
        });
    }
    public static void SwagerConfig(this IServiceCollection services)
    {
        services.AddSwaggerGen(c => {
            c.SwaggerDoc("v1", new OpenApiInfo
            {
                Title = "LuxuryHub",
                Version = "v1"
            });
            c.AddSecurityDefinition(JwtBearerDefaults.AuthenticationScheme, new OpenApiSecurityScheme
            {
                In = ParameterLocation.Header,
                Description = "Please enter JWT with Bearer into field",
                Name = "Authorization",
                Type = SecuritySchemeType.ApiKey,
                Scheme = "Bearer",
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = JwtBearerDefaults.AuthenticationScheme
                }
            });
            c.AddSecurityRequirement(new OpenApiSecurityRequirement
            {
                {
                    new OpenApiSecurityScheme
                    {
                        Reference = new OpenApiReference
                        {
                            Type = ReferenceType.SecurityScheme,
                            Id = JwtBearerDefaults.AuthenticationScheme
                        }
                    },
                    Array.Empty<string>()
                }
            });
        });
    }
    public static void NewtonsoftJsonConfig(this IServiceCollection services)
    {
        services.AddControllersWithViews()
            .AddNewtonsoftJson(options =>
            options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
        );
    }
}
