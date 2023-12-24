using AutoMapper;
using Core.Dtos.Parfume;
using Core.Dtos.Product;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;

namespace Core.Services;

public class ParfumeService(
    IRepository<ProductEntity> productRepository,
    IMapper mapper,
    IRepository<ParfumePiece> parfumePieceRepository,
    IRepository<Parfume> parfumeRepository)
    : IParfumeService
{
    public async Task Create(CreateProductParfumeDto createProductParfumeDTO)
    {
        ProductEntity productEntity = mapper.Map<ProductEntity>(createProductParfumeDTO);

        await productRepository.Insert(productEntity);
        await productRepository.Save();

        Parfume parfume = new Parfume()
        {
            ProductId = productEntity.Id
        };

        await parfumeRepository.Insert(parfume);
        await parfumeRepository.Save();

        foreach (var item in createProductParfumeDTO.ParfumePieces)
        {
            ParfumePiece parfumePiece = mapper.Map<ParfumePiece>(item);

            parfumePiece.ParfumeId = parfume.Id;

            await parfumePieceRepository.Insert(parfumePiece);
            await parfumePieceRepository.Save();
        }
    }

    public async Task Delete(int id)
    {
        if (await parfumeRepository.GetById(id) == null)
            return;

        await parfumeRepository.Delete(id);
        await parfumeRepository.Save();
    }

    public async Task Edit(EditProductParfumeDTO editProductDTO)
    {
        await productRepository.Update(mapper.Map<ProductEntity>(editProductDTO));
        await productRepository.Save();
    }

    public async Task<IEnumerable<ParfumeDto>> Get()
    {
        var result = await parfumeRepository.GetListBySpec(new Parfumes.GetAll());

        return mapper.Map<IEnumerable<ParfumeDto>>(result);
    }

    public async Task<ParfumeDto?> GetById(int id)
    {
        Parfume? parfume = await parfumeRepository.GetItemBySpec(new Parfumes.GetById(id));

        if (parfume == null)
            throw new Exception();

        return mapper.Map<ParfumeDto>(parfume);
    }
}