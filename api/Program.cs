using api.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// ══════════[Services Container]═════════════

//Controllers configuration
builder.Services.AddControllers();

//Database connection configuration
builder.Services.AddDbContext<StoreContext>(opt =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});


var app = builder.Build();



// ══════════[Middleware]══════════
// HTTP request pipeline configuration

app.MapControllers();

DbInitializer.InitDb(app);  



//run app
app.Run();
