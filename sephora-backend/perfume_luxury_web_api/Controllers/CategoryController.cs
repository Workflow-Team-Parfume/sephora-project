namespace perfume_luxury_web_api.Controllers;

[Route("[controller]"), ApiController]
public class CategoryController(ICategoryService categoryService) : Controller
{
    [HttpGet]
    public async Task<IActionResult> Get()
        => Ok(await categoryService.Get());
    
    [HttpGet("{id:int}")]
    public async Task<IActionResult> Get([FromRoute] int id)
        => Ok(await categoryService.GetById(id));

    [HttpPost]
    public async Task<IActionResult> Create([FromForm] CreateCategoryDto category)
    {
        if (!ModelState.IsValid) 
            throw new ArgumentException("The model is not valid.");

        await categoryService.Create(category);
        return Ok();
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete([FromRoute] int id)
    {
        await categoryService.Delete(id);
        return Ok();
    }

    [HttpPut]
    public async Task<IActionResult> Edit([FromBody] CategoryDto category)
    {
        if (!ModelState.IsValid) 
            throw new ArgumentException("The model is not valid.");
        await categoryService.Edit(category);

        return Ok();
    }
}
