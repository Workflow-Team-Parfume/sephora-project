using CleanArchitecture.Application.Dtos.Delivery;

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

        CreateMap<ProductDto, ProductEntity>().ReverseMap();
        CreateMap<CreateProductDto, ProductEntity>().ReverseMap();
        CreateMap<EditProductDto, ProductEntity>().ReverseMap();
        CreateMap<ProductEntity, CreateProductParfumeDto>()
            .ForMember(dest => dest.ParfumePieces, opt => opt.Ignore());
        CreateMap<CreateProductParfumeDto, ProductEntity>();
        CreateMap<EditProductParfumeDto, ProductEntity>().ReverseMap();

        CreateMap<CreateProductPieceDto, ProductPiece>().ReverseMap();
        CreateMap<ProductPieceDTO, ProductPiece>().ReverseMap();
        CreateMap<EditProductPieceDTO, ProductPiece>().ReverseMap();

        CreateMap<EditUserDto, UserEntity>()
            .ForMember(
                dest => dest.ProfilePicture,
                opt => opt.MapFrom(src => src.ProfilePicture != null
                    ? Path.GetRandomFileName()
                    : null
                ));
        CreateMap<UserEntity, GetUserDto>();

        CreateMap<CartItem, CartDto>()
            .ForMember(
                dest => dest.ProductName,
                opt => opt.MapFrom(src => src.ProductPiece.Product.Name)
            )
            .ForMember(
                dest => dest.ProductDescription,
                opt => opt.MapFrom(src => src.ProductPiece.Product.Description)
            )
            .ForMember(
                dest => dest.ProductImage,
                opt => opt.MapFrom(src => src.ProductPiece.Product.ImgPath)
            )
            .ForMember(
                dest => dest.BrandName,
                opt => opt.MapFrom(src => src.ProductPiece.Product.Brand.Name)
            )
            .ForMember(
                dest => dest.CategoryName,
                opt => opt.MapFrom(src => src.ProductPiece.Product.Category.Name)
            )
            .ReverseMap();

        CreateMap<CreateCartDto, CartItem>();
        
        CreateMap<CreateDeliveryDto, DeliveryEntity>();  
        // TODO: Add other delivery mappings
    }
}
