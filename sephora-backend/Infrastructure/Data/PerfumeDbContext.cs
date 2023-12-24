using Core.Configurations;
using Core.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data;

public class PerfumeDbContext(DbContextOptions options) : IdentityDbContext<UserEntity>(options)
{
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // ----------- Set Configurations -----------
        modelBuilder.ApplyConfiguration(new UserConfigurations());
    }
    //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    //{
    //    base.OnConfiguring(optionsBuilder);
    //    string connStr = @"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=ParfumeDb;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
    //    optionsBuilder.UseSqlServer(connStr);
    //}

    // ---------------- Data Collections ----------------
    public DbSet<Category> Categories { get; set; }
    public DbSet<Amount> Amounts { get; set; }
    public DbSet<Brand> Brands { get; set; }
    public DbSet<Rating> Ratings { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<ProductEntity> Products { get; set; }
    public DbSet<Care> Cares { get; set; }
    public DbSet<CarePiece> CarePieces { get; set; }
    public DbSet<Parfume> Parfumes { get; set; }
    public DbSet<ParfumePiece> ParfumePieces { get; set; }
    public DbSet<ParfumeBottled> ParfumeBottleds { get; set; }
}