using CleanArchitecture.Application.Helpers;
using Infrastructure;
using Newtonsoft.Json;
using perfume_luxury_web_api;

var builder = WebApplication.CreateBuilder(args);

string connStr = builder.Configuration.GetConnectionString("RemoteDb")
    ?? throw new ApplicationException("Connection string is null");

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddControllersWithViews()
    .AddNewtonsoftJson(options =>
    options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore
);
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

// add JWT tokens
builder.Services.AddJwt(builder.Configuration);

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen();

builder.Services.AddDbContext(connStr);

builder.Services.AddIdentity();

builder.Services.AddRepository();
builder.Services.AddCustomServices();

//add custom services
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
