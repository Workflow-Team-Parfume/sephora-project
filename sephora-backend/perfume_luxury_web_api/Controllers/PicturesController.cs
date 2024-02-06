using CleanArchitecture.Application.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace perfume_luxury_web_api.Controllers;

[ApiController, Route("api/[controller]")]
public class PicturesController(
    IPictureService pictureService
) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> SaveImage(IFormFile file)
    {
        string picName = await pictureService.SaveImage(file);
        return Ok(pictureService.CreatePicDto(picName));
    }

    // [HttpGet("{name}")]
    // public IActionResult GetImage([FromRoute] string name)
    // {
    //     if (!pictureService.FileExists(name))
    //         return NotFound(new
    //         {
    //             Status = "404 Not Found",
    //             Error = "Image not found"
    //         });
    //     
    //     return File(pictureService.GetFile(name), "image/webp");
    // }

    // may be FromBody|FromQuery
    [HttpDelete("{name}")]
    public IActionResult DeleteImage([FromRoute] string name)
    {
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
