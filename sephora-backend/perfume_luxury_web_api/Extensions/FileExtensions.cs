using CleanArchitecture.Application.Services.Implementations;
using CleanArchitecture.Application.Services.Interfaces;
using Microsoft.Extensions.FileProviders;

namespace perfume_luxury_web_api.Extensions;

public static class FileExtensions
{
    private static readonly string[] Sizes = ["50x50", "150x150", "500x500", "1000x1000", "original"];

    public static IServiceCollection AddFileService(
        this IServiceCollection services,
        bool isDevelopment
    )
    {
        ArgumentNullException.ThrowIfNull(services);
        return services.AddScoped<IPictureService, PhysicalPictureService>(_ =>
            new PhysicalPictureService(
                GetContentPath(isDevelopment),
                isDevelopment
            )
        );
    }

    public static IApplicationBuilder UseFiles(
        this IApplicationBuilder app,
        bool isDevelopment
    )
    {
        ArgumentNullException.ThrowIfNull(app);
        return app.UseFileServer(new FileServerOptions
        {
            FileProvider = new PhysicalFileProvider(GetContentPath(isDevelopment)),
            RequestPath = "/assets",
            EnableDirectoryBrowsing = false,
        });
    }

    /**
     * <summary>Get the content path for the file service</summary>
     * <param name="isDevelopment">
     * Whether the application is in development mode
     * </param>
     * <returns>The content path</returns>
     * <exception cref="ApplicationException">
     * Application is in production, but WebRootPath is not set
     * </exception>
     */
    private static string GetContentPath(bool isDevelopment)
    {
        // Get the path of the content directory for different environments
        string path;
        if (isDevelopment)
        {
            path = Path.Combine(Directory.GetCurrentDirectory(), "Uploads");
            Directory.CreateDirectory(path);
        }
        else
            path = Environment.GetEnvironmentVariable("WebRootPath")
                   ?? throw new ApplicationException("WebRootPath is null");

        return path;
    }
}
