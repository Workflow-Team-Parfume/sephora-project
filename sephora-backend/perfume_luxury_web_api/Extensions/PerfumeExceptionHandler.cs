namespace perfume_luxury_web_api.Extensions;

// TODO: Add logging
public class PerfumeExceptionHandler : IExceptionHandler
{
    private const string ContentType = "application/problem+json";

    private const string UnhandledExceptionMsg
        = "An unhandled exception has occurred while executing the request.";

    private static readonly JsonSerializerOptions SerializerOptions
        = new(JsonSerializerDefaults.Web)
        {
            Converters = { new JsonStringEnumConverter(JsonNamingPolicy.CamelCase) }
        };

    private static string ToJson(in ProblemDetails problemDetails)
    {
        try
        {
            return System.Text.Json.JsonSerializer.Serialize(
                problemDetails,
                SerializerOptions
            );
        }
        catch (Exception ex)
        {
            const string msg = "An exception has occurred while serializing error to JSON";
            return $$"""
                     {
                     	"status": 500,
                     	"title":"{{msg}}",
                     	"detail":"{{ex.Message}}"
                     }
                     """;
        }
    }

    public async ValueTask<bool> TryHandleAsync(
        HttpContext httpContext,
        Exception exception,
        CancellationToken cancellationToken
    )
    {
        int statusCode = exception switch
        {
            HttpException httpException => (int)httpException.StatusCode,
            SecurityException _ => (int)HttpStatusCode.Unauthorized,
            UnauthorizedAccessException _ => (int)HttpStatusCode.Unauthorized,
            NotSupportedException _ => (int)HttpStatusCode.Forbidden,
            ArgumentException _ => (int)HttpStatusCode.BadRequest,
            IOException _ => (int)HttpStatusCode.BadRequest,
            DbUpdateException _ => (int)HttpStatusCode.BadRequest,
            DbException _ => (int)HttpStatusCode.BadRequest,
            _ => (int)HttpStatusCode.InternalServerError
        };

        string reasonPhrase = ReasonPhrases.GetReasonPhrase(statusCode);
        if (string.IsNullOrWhiteSpace(reasonPhrase))
            reasonPhrase = UnhandledExceptionMsg;

        var details = ToJson(new ProblemDetails
        {
            Status = statusCode,
            Title = $"{statusCode} {reasonPhrase}",
            Detail = exception.Message,
        });

        httpContext.Response.ContentType = ContentType;
        httpContext.Response.StatusCode = statusCode;
        await httpContext.Response.WriteAsync(details, cancellationToken);

        return true;
    }
}
