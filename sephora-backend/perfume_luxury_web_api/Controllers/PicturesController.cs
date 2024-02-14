namespace perfume_luxury_web_api.Controllers;

[ApiController, Route("assets/img")]
public class PicturesController(
    IPictureService pictureService,
    IHostEnvironment env
) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> SaveImage(IFormFile file)
    {
        string picName = await pictureService.SaveImage(file);
        return Ok(new PictureDto(picName, env.IsDevelopment()));
    }

    [HttpGet("{name}")]
    public IActionResult GetImage(
        [FromRoute] string name,
        [FromQuery] string size = "original"
    )
    {
        if (!pictureService.SizeExists(size))
            return NotFound(new
            {
                Status = "404 Not Found",
                Error = "Invalid size"
            });
        if (!pictureService.FileExists(name))
            return NotFound(new
            {
                Status = "404 Not Found",
                Error = "Image not found"
            });

        return File(pictureService.GetFile(name, size), "image/webp");
    }

    // may be FromBody|FromQuery
    [HttpDelete("{name}")]
    public IActionResult DeleteImage([FromRoute] string name)
    {
        if (!pictureService.FileExists(name))
            return NotFound(new
            {
                Status = "404 Not Found",
                Error = "Image not found"
            });
        try
        {
            pictureService.DeleteFile(name);
            return Ok(new
            {
                Status = "200 OK",
                Message = "Image deleted"
            });
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
            return BadRequest(new
            {
                Status = "400 Bad Request",
                Error = "Failed to delete the image"
            });
        }
    }
}
