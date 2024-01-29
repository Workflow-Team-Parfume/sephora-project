using CleanArchitecture.Domain.Entities;

var builder = WebApplication.CreateBuilder(args);

string connStr = builder.Environment.IsDevelopment()
    ? builder.Configuration.GetConnectionString("RemoteDb")
    : Environment.GetEnvironmentVariable("RemoteDb");

if (connStr is null)
    throw new ApplicationException("Connection string is null");

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddControllersWithViews()
    .AddNewtonsoftJson(options =>
        options.SerializerSettings.ReferenceLoopHandling
            = ReferenceLoopHandling.Ignore
    );

// Add JWT tokens
JwtOptions opts = builder.Environment.IsDevelopment()
    ? builder.Configuration.GetSection("JwtOptions").Get<JwtOptions>()
    : new JwtOptions
    {
        Issuer = Environment.GetEnvironmentVariable("JwtIssuer"),
        Key = Environment.GetEnvironmentVariable("JwtKey"),
        Lifetime = Convert.ToInt32(
            Environment.GetEnvironmentVariable("JwtLifetime")
        )
    };
builder.Services.AddJwt(opts);

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

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

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
