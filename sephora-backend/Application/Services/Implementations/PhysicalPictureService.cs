using CleanArchitecture.Application.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Processing;

namespace CleanArchitecture.Application.Services.Implementations;

public class PhysicalPictureService(string contentPath) : IPictureService
{
    private const string WebpExt = ".webp";

    public async Task<string> SaveImage(IFormFile file)
    {
        await using Stream stream = file.OpenReadStream();
        return await SaveImage(stream);
    }

    public async Task<string> SaveImage(byte[] file)
    {
        await using Stream stream = new MemoryStream(file);
        return await SaveImage(stream);
    }

    public async Task<string> SaveImage(Stream file)
    {
        // Prepare the image (load & resize)
        using Image image = await Image.LoadAsync(file);
        ResizeOptions opts = new()
        {
            Size = image.Size,
            Mode = ResizeMode.Max
        };
        image.Mutate(context => context.Resize(opts));

        // Save the image
        string fullPath = Path.Combine(contentPath, GenerateFileName());
        await using FileStream fs = new(fullPath, FileMode.Create);
        await image.SaveAsWebpAsync(fullPath);

        return fullPath;
    }

    public Stream GetFile(string name)
        => new FileStream(
            Path.Combine(contentPath, name),
            FileMode.Open, FileAccess.Read, FileShare.Read
        );

    public byte[] GetFileBytes(string name)
        => File.ReadAllBytes(Path.Combine(contentPath, name));

    public void DeleteFile(string name)
    {
        if (FileExists(name))
            File.Delete(Path.Combine(contentPath, name));
    }

    public bool FileExists(string name)
        => File.Exists(Path.Combine(contentPath, name));

    /**
     * <summary>Generate a unique file name</summary>
     * <param name="extension">The file extension</param>
     * <returns>The unique file name</returns>
     */
    private string GenerateFileName(string extension = WebpExt)
        => $"{Guid.NewGuid()}.{extension}";
}
