namespace CleanArchitecture.Application.Services.Implementations;

public class ProductService(
    IRepository<ProductEntity> productRepository,
    IPieceService pieceService,
    IMapper mapper
) : IProductService
{
    public async Task Create(CreateProductDto createProductDto)
    {
        await productRepository.Insert(
            mapper.Map<ProductEntity>(createProductDto)
        );
        await productRepository.Save();
    }

    public async Task Delete(long id)
    {
        // delete pieces directly so the files are also cleaned up
        var pieces = (await productRepository.GetItemBySpec(
                new Products.GetById(id))
            )?.ProductPieces;
        foreach (var piece in pieces ?? [])
            await pieceService.Delete(mapper.Map<ProductPiece>(piece).Id);

        await productRepository.Delete(id);
        await productRepository.Save();
    }

    public async Task Edit(EditProductDto editProductDto)
    {
        await productRepository.Update(
            mapper.Map<ProductEntity>(editProductDto)
        );
        await productRepository.Save();
    }

    public async Task<IEnumerable<ProductDto>> Get()
        => mapper.Map<IEnumerable<ProductDto>>(
            await productRepository.GetListBySpec(new Products.GetAll())
        );

    public async Task<ProductDto?> GetById(long id)
    {
        ProductEntity? productDto = await productRepository.GetItemBySpec(
            new Products.GetById(id)
        );

        if (productDto is null)
            throw new ArgumentException(
                $"Product with the id={{{id}}} is not found"
            );

        return mapper.Map<ProductDto>(productDto);
    }
}
