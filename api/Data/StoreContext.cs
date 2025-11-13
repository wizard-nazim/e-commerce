using Microsoft.EntityFrameworkCore;
using api.Entities;

namespace api.Data;

public class StoreContext(DbContextOptions options) : DbContext(options)
{
    public required DbSet<Product> Products { get; set; }
}
