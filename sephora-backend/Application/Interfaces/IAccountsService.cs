using CleanArchitecture.Application.Dtos.User;

namespace CleanArchitecture.Application.Interfaces;

public interface IAccountsService
{
    Task<IEnumerable<GetUserDto>> GetAll();
    Task<GetUserDto> Get(string id);
    Task<LoginResponseDto> Login(LoginDto dto);
    Task Register(RegisterDto dto);
    Task Logout();
    Task Delete(string id);
    Task Edit(string userId, EditUserDto userDto);
    Task<bool> CheckUsernameExists(string userName);
    Task<bool> CheckEmailExists(string email);

}