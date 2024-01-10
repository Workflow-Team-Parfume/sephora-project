using Infrastructure.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Interfaces;

public interface IRoleRepository : IRepository<IdentityRole>
{
}