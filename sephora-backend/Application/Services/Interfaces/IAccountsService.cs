namespace CleanArchitecture.Application.Services.Interfaces;

public interface IAccountsService
{
    IQueryable<GetUserDto> GetAll();

    async Task<PagedListInfo<GetUserDto>> Get(
        int pageNumber,
        int pageSize,
        string? orderBy = null,
        string? selectBy = null,
        bool fromStart = false
    )
    {
        // TODO: Implement selection by dynamic where clause
        string? preparedSelectBy = null;

        return await GetAll().ToPagedListInfoAsync(
            pageNumber,
            pageSize,
            orderBy,
            preparedSelectBy,
            fromStart
        );
    }

    Task<GetUserDto> Get(string id);
    Task<LoginResponseDto> Login(LoginDto dto);
    Task Register(RegisterDto dto);
    Task Logout();
    Task Delete(string id);
    Task Edit(string userId, EditUserDto userDto);
    Task<bool> CheckUsernameExists(string userName);
    Task<bool> CheckEmailExists(string email);
}
