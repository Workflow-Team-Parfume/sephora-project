using CleanArchitecture.Application.Dtos.Product;
using CleanArchitecture.Application.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace perfume_luxury_web_api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ParfumeController(IPerfumeService perfumeService) : Controller
{
    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreateProductParfumeDto product)
    {
        if (!ModelState.IsValid) return BadRequest();
        
        await perfumeService.Create(product);
        return Ok();
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        return Ok(await perfumeService.Get());
    }

    [HttpGet("{id:int}")]
    public async Task<IActionResult> Get([FromRoute] int id)
    {
        var item = await perfumeService.GetById(id);
        return Ok(item);
    }

    [HttpPut]
    public async Task<IActionResult> Edit([FromBody] EditProductParfumeDto product)
    {
        if (!ModelState.IsValid) return BadRequest();
        
        await perfumeService.Edit(product);
        return Ok();
    }
}