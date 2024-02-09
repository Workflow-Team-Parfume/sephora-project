namespace CleanArchitecture.Application.Services.Implementations;

public class BrandService(
    IRepository<Brand> brandRepository,
    IMapper mapper)
    : IBrandService
{
    public async Task Create(CreateBrandDto brandDto)
    {
        await brandRepository.Insert(mapper.Map<Brand>(brandDto));
        await brandRepository.Save();
    }

    public async Task Delete(int id)
    {
        if (await brandRepository.GetById(id) == null)
            return;

        await brandRepository.Delete(id);
        await brandRepository.Save();
    }

    public async Task Edit(BrandDto brandDto)
    {
        await brandRepository.Update(mapper.Map<Brand>(brandDto));
        await brandRepository.Save();
    }

    public async Task<IEnumerable<BrandDto>> Get()
        => mapper.Map<IEnumerable<BrandDto>>(await brandRepository.GetAll());

    public async Task<BrandDto?> GetById(int id)
    {
        Brand? brand = await brandRepository.GetItemBySpec(new Brands.GetById(id));

        if (brand == null)
            throw new Exception();

        return mapper.Map<BrandDto>(brand);
    }
}
