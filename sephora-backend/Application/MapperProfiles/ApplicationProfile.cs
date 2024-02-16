namespace CleanArchitecture.Application.MapperProfiles;

public class ApplicationProfile : Profile
{
    private static string? EnvName =>
        Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");

    public ApplicationProfile()
    {
        CreateMap<Brand, BrandDto>().ReverseMap();
        CreateMap<Brand, CreateBrandDto>().ReverseMap();

        CreateMap<Category, CategoryDto>().ReverseMap();
        CreateMap<Category, CreateCategoryDto>().ReverseMap();

        CreateMap<Amount, AmountDto>().ReverseMap();
        CreateMap<Amount, CreateAmountDto>().ReverseMap();

        CreateMap<ProductEntity, ProductDto>().ForMember(
            dest => dest.Pieces,
            opts => opts.MapFrom(src => src.ProductPieces)
        ).ForMember(
            dest => dest.Volumes,
            opts => opts.MapFrom(src => src.ProductPieces!.Select(x => x.Amount))
        );
        CreateMap<CreateProductDto, ProductEntity>().ReverseMap();
        CreateMap<EditProductDto, ProductEntity>().ReverseMap();

        CreateMap<CreateProductPieceDto, ProductPiece>()
            .ForMember(dest => dest.ProductPictures, opt => opt.Ignore());
        CreateMap<ProductPiece, ProductPieceDto>().ForMember(
            dest => dest.Milliliters,
            opts => opts.MapFrom(src => src.Amount!.Milliliters)
        ).ForMember(
            dest => dest.Pictures,
            opts => opts.MapFrom(src => src.ProductPictures)
        );
        CreateMap<EditProductPieceDto, ProductPiece>();

        CreateMap<ProductPicture, PictureDto>()
            .ConstructUsing(x =>
                new PictureDto(x.PicturePath, EnvName == "Development")
            );

        CreateMap<CreateRatingDto, Rating>();
        CreateMap<EditRatingDto, Rating>();
        CreateMap<Rating, RatingDto>();

        /*
         * TODO: Ignore profile pic mapping at all, but
         * make an appropriate service to store the user PFPs
         */
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
