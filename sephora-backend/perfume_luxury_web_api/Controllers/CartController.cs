using CleanArchitecture.Application.Dtos.Cart;
using CleanArchitecture.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace perfume_luxury_web_api.Controllers;

// TODO: Add logging

[Authorize, ApiController, Route("api/[controller]")]
public class CartController(ICartService cartService) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> Get()
    {
        return Ok(await cartService.Get());
    }
    
    [HttpGet("{id:int}")]
    public async Task<IActionResult> Get([FromRoute] int id)
    {
        var item = await cartService.GetById(id);
        return Ok(item);
    }
    
    [HttpPut]
    public async Task<IActionResult> Add([FromBody] CreateCartDTO cartItem)
    {
        await cartService.Create(cartItem);
        return Ok();
    }
    
    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Remove([FromRoute] int id)
    {
        await cartService.Delete(id);
        return Ok();
    }
}