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

        CreateMap<CreateProductPieceDto, ProductPiece>().ReverseMap();
        // CreateMap<ProductPieceDTO, ProductPiece>(); // is it really needed?
        CreateMap<ProductPiece, ProductPieceDTO>()
            .ForMember(
                dest => dest.Milliliters,
                opts => opts.MapFrom(src => src.Amount!.Milliliters)
            );
        CreateMap<EditProductPieceDTO, ProductPiece>().ReverseMap();

        // TODO
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
        CreateMap<DeliveryEntity, DeliveryDto>().ReverseMap();
    }
}
