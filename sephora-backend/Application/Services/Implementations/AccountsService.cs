﻿using Google.Apis.Auth;

namespace CleanArchitecture.Application.Services.Implementations;

public class AccountsService(
    UserManager<UserEntity> userManager,
    SignInManager<UserEntity> signInManager,
    IJwtService jwtService,
    IPictureService pictureService,
    IMapper mapper,
    IConfiguration configuration
)
    : IAccountsService
{
    private static string? EnvName =>
        Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");

    public IQueryable<GetUserDto> Get()
        => userManager.Users
            .ProjectTo<GetUserDto>(mapper.ConfigurationProvider);

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

    public async Task<LoginResponseDto> GoogleAuth(string token)
    {
        bool isDev = EnvName == "Development";
        var settings = new GoogleJsonWebSignature.ValidationSettings
        {
            Audience =
            [   // Google Client ID
                isDev
                    ? configuration["JwtOptions:GoogleClientId"]
                    : Environment.GetEnvironmentVariable("GoogleClientId")
            ]
        };
        

        GoogleJsonWebSignature.Payload payload = await GoogleJsonWebSignature.ValidateAsync(token, settings);
        // return new LoginResponseDto
        // {
        //     Token = jwtService.CreateToken(
        //         [
        //             new Claim(ClaimTypes.Email, payload.Email),
        //             new Claim(ClaimTypes.Name, payload.Name),
        //             new Claim(ClaimTypes.Uri, payload.Picture),
        //             new Claim(ClaimTypes.NameIdentifier, payload.Subject),
        //             new Claim(ClaimTypes.Role, "User"),
        //             new Claim(ClaimTypes.Authentication, "Google"),
        //             new Claim(ClaimTypes.Expiration, payload.ExpirationTimeSeconds?.ToString() ?? "0"),
        //             new Claim(ClaimTypes.GivenName, payload.GivenName),
        //             new Claim(ClaimTypes.Surname, payload.FamilyName),
        //             new Claim(ClaimTypes.Locality, payload.Locale),
        //         ]
        //     ),
        // };
        return null!;
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
