﻿using CleanArchitecture.Application.Dtos.ProductPiece;

namespace CleanArchitecture.Application.Dtos.Product;

public class CreateProductParfumeDto
{
    public string Name { get; set; } = String.Empty;
    public string? Description { get; set; }
    public string ImgPath { get; set; } = String.Empty;
    public bool Active { get; set; }
    public int BrandId { get; set; }
    public int CategoryId { get; set; }
    public List<CreateProductPieceDto> ParfumePieces { get; set; }
}