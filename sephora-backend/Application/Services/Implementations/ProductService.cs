namespace CleanArchitecture.Application.Services.Implementations;

public class ProductService(
    IRepository<ProductEntity> productRepository,
    IMapper mapper
)
    : IProductService
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
    {
        var result = mapper.Map<IEnumerable<ProductDto>>(
            await productRepository.GetListBySpec(new Products.GetAll())
        );
        return result;
    }

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
