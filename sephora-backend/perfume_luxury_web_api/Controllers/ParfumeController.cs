using CleanArchitecture.Application.Dtos.Product;
using CleanArchitecture.Application.Interfaces;
using Infrastructure.Interfaces.Products;
using Microsoft.AspNetCore.Mvc;

namespace perfume_luxury_web_api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ParfumeController(IParfumeService parfumeService) : Controller
{
    [HttpPost]
    public async Task<IActionResult> Create([FromBody] CreateProductParfumeDto product)
    {
        if (!ModelState.IsValid) return BadRequest();

        await parfumeService.Create(product);

        return Ok();
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        return Ok(await parfumeService.Get());
    }

    [HttpGet("{id:int}")]
    public async Task<IActionResult> Get([FromRoute] int id)
    {
        var item = await parfumeService.GetById(id);
        return Ok(item);
    }

    [HttpPut]
    public async Task<IActionResult> Edit([FromBody] EditProductParfumeDTO product)
    {
        if (!ModelState.IsValid) return BadRequest();

        await parfumeService.Edit(product);

        return Ok();
    }
}