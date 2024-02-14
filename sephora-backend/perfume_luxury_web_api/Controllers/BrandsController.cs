namespace perfume_luxury_web_api.Controllers;

[Route("api/[controller]"), ApiController]
public class BrandsController(IBrandService brandService) : Controller
{
    [HttpGet]
    public async Task<IActionResult> Get()
        => Ok(await brandService.Get());

    [HttpGet("{id:int}")]
    public async Task<IActionResult> Get([FromRoute] int id)
        => Ok(await brandService.GetById(id));

    [HttpPost]
    public async Task<IActionResult> Create([FromForm] CreateBrandDto brand)
    {
        if (!ModelState.IsValid) return BadRequest();

        await brandService.Create(brand);
        return Ok();
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete([FromRoute] int id)
    {
        await brandService.Delete(id);
        return Ok();
    }

    [HttpPut]
    public async Task<IActionResult> Edit([FromBody] BrandDto brand)
    {
        if (!ModelState.IsValid) return BadRequest();

        await brandService.Edit(brand);
        return Ok();
    }
}
