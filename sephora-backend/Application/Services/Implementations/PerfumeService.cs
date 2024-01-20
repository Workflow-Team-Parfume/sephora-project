using AutoMapper;
using CleanArchitecture.Application.Dtos.Parfumes;
using CleanArchitecture.Application.Dtos.Product;
using CleanArchitecture.Application.Services.Interfaces;
using CleanArchitecture.Application.Specifications;
using CleanArchitecture.Domain.Entities;
using Infrastructure.Interfaces;

namespace CleanArchitecture.Application.Services.Implementations;

public class PerfumeService(
    IRepository<ProductEntity> productRepository,
    IMapper mapper,
    IRepository<ParfumePiece> parfumePieceRepository,
    IRepository<Parfume> parfumeRepository)
    : IPerfumeService
{
    public async Task Create(CreateProductParfumeDto createProductParfumeDto)
    {
        ProductEntity productEntity = mapper.Map<ProductEntity>(createProductParfumeDto);

        await productRepository.Insert(productEntity);
        await productRepository.Save();

        Parfume parfume = new Parfume()
        {
            ProductId = productEntity.Id
        };

        await parfumeRepository.Insert(parfume);
        await parfumeRepository.Save();

        foreach (var item in createProductParfumeDto.ParfumePieces)
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

    public async Task Edit(EditProductParfumeDto editProductDto)
    {
        await productRepository.Update(mapper.Map<ProductEntity>(editProductDto));
        await productRepository.Save();
    }

    public async Task<IEnumerable<PerfumeDto>> Get()
    {
        var result = await parfumeRepository.GetListBySpec(new Parfumes.GetAll());

        return mapper.Map<IEnumerable<PerfumeDto>>(result);
    }

    public async Task<PerfumeDto?> GetById(int id)
    {
        Parfume? parfume = await parfumeRepository.GetItemBySpec(new Parfumes.GetById(id));

        if (parfume == null)
            throw new Exception();

        return mapper.Map<PerfumeDto>(parfume);
    }
}
