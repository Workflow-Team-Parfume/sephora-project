using Microsoft.AspNetCore.Authentication.Certificate;

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
}
