using CleanArchitecture.Application.Dtos.Amount;
using CleanArchitecture.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace perfume_luxury_web_api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AmountsController(IAmountService amountService) : Controller
{
    [HttpGet]
    public async Task<IActionResult> Get()
    {
        return Ok(await amountService.Get());
    }

    [HttpGet("{id:int}")]
    public async Task<IActionResult> Get([FromRoute] int id)
    {
        var item = await amountService.GetById(id);
        return Ok(item);
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromForm] CreateAmountDto amount)
    {
        if (!ModelState.IsValid) return BadRequest();

        await amountService.Create(amount);
        return Ok();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete([FromRoute] int id)
    {
        await amountService.Delete(id);
        return Ok();
    }

    [HttpPut]
    public async Task<IActionResult> Edit([FromBody] AmountDto amount)
    {
        if (!ModelState.IsValid) return BadRequest();

        await amountService.Edit(amount);
        return Ok();
    }
}