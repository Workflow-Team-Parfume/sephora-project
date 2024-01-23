using CleanArchitecture.Application.Dtos.User;
using CleanArchitecture.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace perfume_luxury_web_api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AccountController(IAccountsService accountsService)
    : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> Get()
    {
        return Ok(await accountsService.GetAll());
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(string id)
    {
        return Ok(await accountsService.Get(id));
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterDto dto)
    {
        await accountsService.Register(dto);
        return Ok();
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginDto dto)
    {
        var response = await accountsService.Login(dto);
        return Ok(response);
    }

    [HttpPost("logout")]
    public async Task<IActionResult> Logout()
    {
        await accountsService.Logout();
        return Ok();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete([FromRoute] string id)
    {
        await accountsService.Delete(id);
        return Ok();
    }

    [HttpPut("{userId}")]
    public async Task<IActionResult> Edit(string userId, [FromForm] EditUserDto user)
    {
        await accountsService.Edit(userId, user);
        return Ok();
    }

    [HttpGet("checkUsernameExists/{userName}")]
    public async Task<IActionResult> CheckUsernameExists([FromRoute] string userName)
    {
        return Ok(await accountsService.CheckUsernameExists(userName));
    }

    [HttpGet("checkEmailExists/{email}")]
    public async Task<IActionResult> CheckEmailExists([FromRoute] string email)
    {
        return Ok(await accountsService.CheckEmailExists(email));
    }
}