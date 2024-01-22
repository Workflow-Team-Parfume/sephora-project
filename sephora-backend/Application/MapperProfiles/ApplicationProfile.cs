using AutoMapper;
using CleanArchitecture.Application.Dtos.Amount;
using CleanArchitecture.Application.Dtos.Brand;
using CleanArchitecture.Application.Dtos.Category;
using CleanArchitecture.Application.Dtos.Product;
using CleanArchitecture.Application.Dtos.ProductPiece;
using CleanArchitecture.Application.Dtos.User;
using CleanArchitecture.Domain.Entities;

namespace CleanArchitecture.Application.MapperProfiles;

public class ApplicationProfile : Profile
{
    public ApplicationProfile()
    {
        CreateMap<Brand, BrandDto>().ReverseMap();
        CreateMap<Brand, CreateBrandDto>().ReverseMap();

        CreateMap<Category, CategoryDto>().ReverseMap();
        CreateMap<Category, CreateCategoryDto>().ReverseMap();

        CreateMap<Amount, AmountDto>().ReverseMap();
        CreateMap<Amount, CreateAmountDto>().ReverseMap();

        CreateMap<ProductDTO, ProductEntity>().ReverseMap();
        CreateMap<CreateProductDto, ProductEntity>().ReverseMap();
        CreateMap<EditProductDto, ProductEntity>().ReverseMap();
        CreateMap<ProductEntity, CreateProductParfumeDto>()
            .ForMember(dest => dest.ParfumePieces, opt => opt.Ignore());
        CreateMap<CreateProductParfumeDto, ProductEntity>();
        CreateMap<EditProductParfumeDTO, ProductEntity>().ReverseMap();


        CreateMap<CreateProductPieceDto, ProductPiece>().ReverseMap();
        CreateMap<ProductPieceDTO, ProductPiece>().ReverseMap();
        CreateMap<EditProductPieceDTO, ProductPiece>().ReverseMap();

        CreateMap<EditUserDto, UserEntity>()
            .ForMember(dest => dest.ProfilePicture, opt => opt.MapFrom(src => src.ProfilePicture != null ? Path.GetRandomFileName() : null));
        CreateMap<UserEntity, GetUserDto>();
    }
}