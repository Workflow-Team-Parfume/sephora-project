using AutoMapper;
using Core.Dtos.Amount;
using Core.Dtos.Brand;
using Core.Dtos.Category;
using Core.Dtos.Parfume;
using Core.Dtos.ParfumePiece;
using Core.Dtos.Perfume;
using Core.Dtos.Product;
using Core.Dtos.User;
using Core.Entities;

namespace Core.MapperProfiles;

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


        CreateMap<CreateParfumePieceDto, ParfumePiece>().ReverseMap();
        CreateMap<ParfumePieceDTO, ParfumePiece>().ReverseMap();
        CreateMap<EditParfumePieceDto, ParfumePiece>().ReverseMap();

        CreateMap<CreateParfumeDto, Parfume>().ReverseMap();
        CreateMap<ParfumeDto, Parfume>().ReverseMap();

        CreateMap<EditUserDto, UserEntity>()
            .ForMember(dest => dest.ProfilePicture, opt => opt.MapFrom(src => src.ProfilePicture != null ? Path.GetRandomFileName() : null));
        CreateMap<UserEntity, GetUserDto>();
    }
}