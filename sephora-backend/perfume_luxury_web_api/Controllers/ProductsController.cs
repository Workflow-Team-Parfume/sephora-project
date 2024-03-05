﻿namespace perfume_luxury_web_api.Controllers;

[Route("[controller]"), ApiController]
public class ProductsController(IProductService productService) : Controller
{
    [HttpGet("all")]
    public async Task<IActionResult> GetAll()
        => Ok(await (await productService.Get()).ToListAsync());

    [HttpGet]
    public async Task<IActionResult> GetPaged(
        [FromQuery] int page = 1,
        [FromQuery] int size = 10,
        [FromQuery] string? sort = null,
        [FromQuery] string? filter = null
    ) => Ok(await productService.Get(page, size, sort, filter));

    [HttpGet("{id:long}")]
    public async Task<IActionResult> Get([FromRoute] long id)
        => Ok(await productService.GetById(id, User));

    [HttpPost, Authorize(Roles = "Admin,Moderator")]
    public async Task<IActionResult> Create([FromBody] CreateProductDto product)
    {
        if (!ModelState.IsValid)
            throw new ArgumentException("The model is not valid.");

        await productService.Create(product);
        return Ok();
    }

    [HttpDelete("{id:long}"), Authorize(Roles = "Admin,Moderator")]
    public async Task<IActionResult> Delete([FromRoute] long id)
    {
        await productService.Delete(id);
        return Ok();
    }

    [HttpPut, Authorize(Roles = "Admin,Moderator")]
    public async Task<IActionResult> Edit([FromBody] EditProductDto product)
    {
        if (!ModelState.IsValid)
            throw new ArgumentException("The model is not valid.");

        await productService.Edit(product);
        return Ok();
    }
}
