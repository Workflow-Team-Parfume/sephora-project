namespace CleanArchitecture.Application.Services.Implementations;

public class AccountsService(
    UserManager<UserEntity> userManager,
    SignInManager<UserEntity> signInManager,
    IJwtService jwtService,
    IPictureService pictureService,
    IMapper mapper)
    : IAccountsService
{
    public async Task<IEnumerable<GetUserDto>> GetAll()
    {
        var users = await userManager.Users.ToListAsync();
        return mapper.Map<IEnumerable<GetUserDto>>(users);
    }

    public async Task<GetUserDto> Get(string id)
    {
        var user = await userManager.FindByIdAsync(id);
        if (user is null)
            throw new HttpException(
                ErrorMessages.UserByIDNotFound,
                HttpStatusCode.NotFound
            );

        var userDto = mapper.Map<GetUserDto>(user);
        userDto.Roles = (List<string>)await userManager.GetRolesAsync(user);
        return userDto;
    }

    public async Task Edit(string userId, EditUserDto userDto)
    {
        var user = await userManager.FindByIdAsync(userId);
        if (user is null)
            throw new HttpException(
                ErrorMessages.UserByIDNotFound,
                HttpStatusCode.NotFound
            );

        string? oldFileName = user.ProfilePicture;
        mapper.Map(userDto, user);
        if (userDto.ProfilePicture is not null)
        {
            pictureService.DeleteFile(oldFileName);
            var newPfp = await pictureService.SaveImage(userDto.ProfilePicture);
            user.ProfilePicture = newPfp;
        }
        else user.ProfilePicture = oldFileName;

        await userManager.UpdateAsync(user);
    }

    public async Task Delete(string id)
    {
        var user = await userManager.FindByIdAsync(id);
        if (user is null)
            throw new HttpException(
                ErrorMessages.UserByIDNotFound,
                HttpStatusCode.NotFound
            );

        pictureService.DeleteFile(user.ProfilePicture);

        var result = await userManager.DeleteAsync(user);
        if (!result.Succeeded)
            throw new HttpException(
                String.Join(", ", result.Errors.Select(x => x.Description)),
                HttpStatusCode.BadRequest
            );
    }

    public async Task<LoginResponseDto> Login(LoginDto dto)
    {
        var user = await userManager.FindByEmailAsync(dto.Email);

        if (user is null ||
            !await userManager.CheckPasswordAsync(user, dto.Password))
            throw new HttpException(
                ErrorMessages.InvalidCreds,
                HttpStatusCode.BadRequest
            );

        await signInManager.SignInAsync(user, true);
        return new LoginResponseDto
        {
            Token = jwtService.CreateToken(jwtService.GetClaims(user))
        };
    }

    public async Task Logout()
        => await signInManager.SignOutAsync();

    public async Task Register(RegisterDto dto)
    {
        if (await CheckEmailExists(dto.Email))
            throw new HttpException(
                "User with this email already exists",
                HttpStatusCode.BadRequest
            );
        if (dto.Password != dto.PasswordConfirmation)
            throw new HttpException(
                "Passwords do not match",
                HttpStatusCode.BadRequest
            );

        string? pfp = dto.ProfilePicture is null
            ? null
            : await pictureService.SaveImage(dto.ProfilePicture);
        var user = mapper.Map<UserEntity>(dto);
        user.ProfilePicture = pfp;

        var result = await userManager.CreateAsync(user, dto.Password);
        if (!result.Succeeded)
        {
            pictureService.DeleteFile(pfp);

            throw new HttpException(
                String.Join(", ", result.Errors.Select(x => x.Description)),
                HttpStatusCode.BadRequest
            );
        }

        await userManager.AddToRoleAsync(user, nameof(user));
    }

    public async Task<bool> CheckEmailExists(string email)
    {
        var user = await userManager.FindByEmailAsync(email);
        return user is not null;
    }

    public async Task<bool> CheckUsernameExists(string userName)
    {
        var user = await userManager.FindByNameAsync(userName);
        return user is not null;
    }
}
