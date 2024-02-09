﻿namespace perfume_luxury_web_api.Controllers;

[Route("api/[controller]"), ApiController]
public class AccountController(IAccountsService accountsService)
    : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> Get()
        => Ok(await accountsService.GetAll());

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(string id)
        => Ok(await accountsService.Get(id));

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterDto dto)
    {
        if (!ModelState.IsValid) return BadRequest();

        await accountsService.Register(dto);
        return Ok();
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginDto dto)
    {
        if (!ModelState.IsValid) return BadRequest();

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
    public async Task<IActionResult> Edit(
        string userId,
        [FromForm] EditUserDto user
    )
    {
        if (!ModelState.IsValid) return BadRequest();

        await accountsService.Edit(userId, user);
        return Ok();
    }

    [HttpGet("checkUsernameExists/{userName}")]
    public async Task<IActionResult> CheckUsernameExists(
        [FromRoute] string userName
    ) => Ok(await accountsService.CheckUsernameExists(userName));

    [HttpGet("checkEmailExists/{email}")]
    public async Task<IActionResult> CheckEmailExists([FromRoute] string email)
        => Ok(await accountsService.CheckEmailExists(email));
}
