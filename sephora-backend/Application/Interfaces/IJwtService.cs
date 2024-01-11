using CleanArchitecture.Domain.Entities;
using System.Security.Claims;

namespace CleanArchitecture.Application.Interfaces;

public interface IJwtService
{
    IEnumerable<Claim> GetClaims(UserEntity user);
    string CreateToken(IEnumerable<Claim> claims);
}