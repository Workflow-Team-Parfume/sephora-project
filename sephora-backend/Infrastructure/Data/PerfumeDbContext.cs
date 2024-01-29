﻿using CleanArchitecture.Domain.Entities;
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

    // ---------------- Data Collections ----------------
    // ReSharper disable PropertyCanBeMadeInitOnly.Global
    public DbSet<Category> Categories { get; set; } = default!;
    public DbSet<Amount> Amounts { get; set; } = default!;
    public DbSet<Brand> Brands { get; set; } = default!;
    public DbSet<Rating> Ratings { get; set; } = default!;
    public DbSet<Order> Orders { get; set; } = default!;
    public DbSet<ProductEntity> Products { get; set; } = default!;
    public DbSet<ProductPiece> ProductPieces { get; set; } = default!;
    public DbSet<ParfumeBottled> ParfumeBottles { get; set; } = default!;
    public DbSet<CartItem> CartItems { get; set; } = default!;
}
