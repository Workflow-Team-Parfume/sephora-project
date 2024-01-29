using System.Globalization;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using CleanArchitecture.Application.Helpers;
using CleanArchitecture.Application.Services.Interfaces;
using CleanArchitecture.Domain.Entities;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace CleanArchitecture.Application.Services.Implementations;

public class JwtService(IConfiguration configuration) : IJwtService
{
    public string CreateToken(IEnumerable<Claim> claims)
    {
        var jwtOpts = configuration.GetSection(nameof(JwtOptions)).Get<JwtOptions>();

        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtOpts.Key));
        var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            issuer: jwtOpts.Issuer,
            claims: claims,
            expires: DateTime.UtcNow.AddMinutes(jwtOpts.Lifetime),
            signingCredentials: credentials);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }

    public IEnumerable<Claim> GetClaims(UserEntity user)
    {
        var claims = new List<Claim>
        {
            new(CustomClaimTypes.Id, user.Id),
            new(CustomClaimTypes.UserName, user.UserName),
            new(CustomClaimTypes.Email, user.Email),
            new(CustomClaimTypes.ProfilePicture, user.ProfilePicture ?? ""),
            new(CustomClaimTypes.RegistrationDate, user.RegistrationDate.ToString(CultureInfo.InvariantCulture))
        };

        // var roles = userManager.GetRolesAsync(user).Result;
        // claims.AddRange(roles.Select(role => new Claim(ClaimsIdentity.DefaultRoleClaimType, role)));

        return claims;
    }
}

public static class CustomClaimTypes
{
    public const string Id = "id";
    public const string UserName = "userName";
    public const string Email = "email";
    public const string Roles = "roles";
    public const string ProfilePicture = "profilePicture";
    public const string RegistrationDate = "registrationDate";
}
