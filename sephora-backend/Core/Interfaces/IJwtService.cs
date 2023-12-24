using System.Security.Claims;
using Core.Entities;

namespace Core.Interfaces;

public interface IJwtService
{
    IEnumerable<Claim> GetClaims(UserEntity user);
    string CreateToken(IEnumerable<Claim> claims);
}