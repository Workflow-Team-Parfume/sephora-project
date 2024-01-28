namespace perfume_luxury_web_api.Controllers;

[Route("api/[controller]"), ApiController]
public class ProductsController(IProductService productService) : Controller
{
    [HttpGet]
    public async Task<IActionResult> Get()
    {
        return Ok(await productService.Get());
    }

    [HttpGet("{id:int}")]
    public async Task<IActionResult> Get([FromRoute] int id)
    {
        var item = await productService.GetById(id);
        return Ok(item);
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromForm] CreateProductDto product)
    {
        if (!ModelState.IsValid) return BadRequest();

        await productService.Create(product);
        return Ok();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete([FromRoute] int id)
    {
        await productService.Delete(id);
        return Ok();
    }

    [HttpPut]
    public async Task<IActionResult> Edit([FromBody] EditProductDto product)
    {
        if (!ModelState.IsValid) return BadRequest();

        await productService.Edit(product);
        return Ok();
    }
}
