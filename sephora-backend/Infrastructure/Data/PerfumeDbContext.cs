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
    public DbSet<Category> Categories { get; set; } = null!;
    public DbSet<Amount> Amounts { get; set; } = null!;
    public DbSet<Brand> Brands { get; set; } = null!;
    public DbSet<Rating> Ratings { get; set; } = null!;
    public DbSet<Order> Orders { get; set; } = null!;
    public DbSet<ProductEntity> Products { get; set; } = null!;
    public DbSet<Care> Cares { get; set; } = null!;
    public DbSet<CarePiece> CarePieces { get; set; } = null!;
    public DbSet<Parfume> Parfumes { get; set; } = null!;
    public DbSet<ParfumePiece> ParfumePieces { get; set; } = null!;
    public DbSet<ParfumeBottled> ParfumeBottles { get; set; } = null!;
    public DbSet<CartItem> CartItems { get; set; } = null!;
}
