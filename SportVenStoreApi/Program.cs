using SportVenStoreApi.Models;
using SportVenStoreApi.Services;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        policy =>
        {
            policy.WithOrigins("http://localhost:3000",
            "http://localhost:3001",
                                "http://www.sportven.com");
        });
});

// Add services to the container.
builder.Services.Configure<SportVenStoreDatabaseSettings>(
    builder.Configuration.GetSection("SportVenStoreDatabase"));
builder.Services.AddSingleton<VenuesTypesService>();
builder.Services.AddSingleton<CountriesService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
