namespace perfume_luxury_web_api.Controllers;

[Route("api/[controller]"), ApiController]
public class ProductsController(IProductService productService) : Controller
{
    [HttpGet]
    public async Task<IActionResult> Get()
    {
        return Ok(await productService.Get());
    }

    [HttpGet("{id:long}")]
    public async Task<IActionResult> Get([FromRoute] long id)
        => Ok(await productService.GetById(id));

    // Authorize admins and mods only
    [HttpPost]
    public async Task<IActionResult> Create([FromForm] CreateProductDto product)
    {
        if (!ModelState.IsValid) return BadRequest();

        await productService.Create(product);
        return Ok();
    }

    // Authorize admins and mods only
    [HttpDelete("{id:long}")]
    public async Task<IActionResult> Delete([FromRoute] long id)
    {
        await productService.Delete(id);
        return Ok();
    }

    // Authorize admins and mods only
    [HttpPut]
    public async Task<IActionResult> Edit([FromBody] EditProductDto product)
    {
        if (!ModelState.IsValid) return BadRequest();

        await productService.Edit(product);
        return Ok();
    }
}
