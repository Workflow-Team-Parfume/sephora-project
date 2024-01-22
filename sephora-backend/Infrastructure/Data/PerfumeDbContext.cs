using CleanArchitecture.Domain.Entities;
using Infrastructure.Configurations;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data;

public class PerfumeDbContext(DbContextOptions<PerfumeDbContext> options) 
    : IdentityDbContext<UserEntity>(options)
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
    //    string connStr = @"";
    //    optionsBuilder.UseSqlServer(connStr);
    //}

    // ---------------- Data Collections ----------------
    // ReSharper disable PropertyCanBeMadeInitOnly.Global
    public DbSet<Category> Categories { get; set; }
    public DbSet<Amount> Amounts { get; set; }
    public DbSet<Brand> Brands { get; set; }
    public DbSet<Rating> Ratings { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<ProductEntity> Products { get; set; }
    public DbSet<ProductPiece> ProductPieces { get; set; }
    public DbSet<ParfumeBottled> ParfumeBottles { get; set; }
}
