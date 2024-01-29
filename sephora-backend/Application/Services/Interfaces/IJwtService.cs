using System.Security.Claims;
using CleanArchitecture.Domain.Entities;

namespace CleanArchitecture.Application.Services.Interfaces;

public interface IJwtService
{
    IEnumerable<Claim> GetClaims(UserEntity user);
    string CreateToken(IEnumerable<Claim> claims);
}
