namespace CleanArchitecture.Application.Services.Interfaces;

public interface IAccountsService
{
    IQueryable<GetUserDto> Get();

    async Task<PagedListInfo<GetUserDto>> Get(
        int pageNumber,
        int pageSize,
        string? orderBy = null,
        string? selectBy = null
    ) => await Get().ToPagedListInfoAsync(pageNumber, pageSize, orderBy, selectBy);

    Task<GetUserDto> Get(string id);
    Task<LoginResponseDto> Login(LoginDto dto);
    Task Register(RegisterDto dto);
    Task Logout();
    Task Delete(string id);
    Task Edit(string userId, EditUserDto userDto);
    Task<bool> CheckUsernameExists(string userName);
    Task<bool> CheckEmailExists(string email);
}
