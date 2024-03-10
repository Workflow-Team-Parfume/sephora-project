var builder = WebApplication.CreateBuilder(args);

string? connStr = builder.Environment.IsDevelopment()
    ? builder.Configuration.GetConnectionString("RemoteDb")
    : Environment.GetEnvironmentVariable("RemoteDb");

if (connStr is null)
    throw new ApplicationException("Connection string is null");

// Add services to the container.

builder.Services.AddControllers().AddNewtonsoftJson(opts => 
        opts.SerializerSettings.Formatting = Formatting.Indented);

// Add JWT tokens
JwtOptions? opts = null;
if (builder.Environment.IsDevelopment())
    opts = builder.Configuration.GetSection(nameof(JwtOptions)).Get<JwtOptions>();
else if (builder.Environment.IsDevelopment() || opts is null)
    opts = new JwtOptions
    {
        Issuer = Environment.GetEnvironmentVariable("JwtIssuer"),
        Key = Environment.GetEnvironmentVariable("JwtKey"),
        Lifetime = Convert.ToInt32(
            Environment.GetEnvironmentVariable("JwtLifetime")
        )
    };
builder.Services.AddJwt(opts!);

builder.Services.SwagerConfig();

builder.Services.NewtonsoftJsonConfig();

builder.Services.AddEndpointsApiExplorer();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext(connStr);

builder.Services.AddIdentity();

builder.Services.AddRepository();

// add custom services
builder.Services.AddCustomServices();

// add auto mapper
builder.Services.AddAutoMapper();

// add fluent validators
builder.Services.AddValidators();

// add file service
builder.Services.AddFileService(builder.Environment.IsDevelopment());

// add exception handler
builder.Services.AddExceptionHandler<ExceptionHandler>();
builder.Services.AddProblemDetails();

var app = builder.Build();

app.UseExceptionHandler();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHsts();
app.UseHttpsRedirection();

app.UseCors(options =>
{
    options.AllowAnyHeader();
    options.AllowAnyMethod();
    options.AllowAnyOrigin();
});

app.UseAuthorization();

app.UseAuthentication();


app.MapControllers();

app.Run();
