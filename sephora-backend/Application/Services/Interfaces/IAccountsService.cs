namespace CleanArchitecture.Application.Services.Interfaces;

public interface IAccountsService
{
    Task<IEnumerable<GetUserDto>> GetAll();

    async Task<PagedListInfo<GetUserDto>> Get(
        int pageNumber,
        int pageSize,
        bool fromStart = true
    ) => (await GetAll()).ToPagedListInfo(pageNumber, pageSize, fromStart);

    Task<GetUserDto> Get(string id);
    Task<LoginResponseDto> Login(LoginDto dto);
    Task Register(RegisterDto dto);
    Task Logout();
    Task Delete(string id);
    Task Edit(string userId, EditUserDto userDto);
    Task<bool> CheckUsernameExists(string userName);
    Task<bool> CheckEmailExists(string email);
}
