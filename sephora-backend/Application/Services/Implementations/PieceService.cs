using HttpException = CleanArchitecture.Application.Helpers.HttpException;

namespace CleanArchitecture.Application.Services.Implementations;

public class PieceService(
    IRepository<ProductPiece> repository,
    IPictureService pictureService,
    IRepository<ProductPicture> prodPicRepo,
    IMapper mapper
) : IPieceService
{
    public IQueryable<LightProductPieceDto> Get()
        => repository.GetListBySpec(new ProductPieces.GetAll())
            .ProjectTo<LightProductPieceDto>(mapper.ConfigurationProvider);

    public async Task<PagedListInfo<LightProductPieceDto>> Get(
        int pageNumber,
        int pageSize,
        string? orderBy = null,
        string? selectBy = null
    )
    {
        var count = await repository.CountBySpec(selectBy);
        var list = await repository
            .GetRange(pageNumber, pageSize, orderBy, selectBy)
            .ProjectTo<LightProductPieceDto>(mapper.ConfigurationProvider)
            .ToListAsync();

        return PagedListInfo.Create(list, pageNumber, pageSize, count);
    }

    public async Task<ProductPieceDto?> GetById(long id)
        => mapper.Map<ProductPieceDto?>(
            await repository.GetItemBySpec(new ProductPieces.GetById(id))
        );

    public async Task Create(CreateProductPieceDto pieceDto)
    {
        var entity = mapper.Map<ProductPiece>(pieceDto);

        await repository.Insert(entity);
        await repository.Save();

        // save attached pictures
        await SavePictures(pieceDto.ProductPictures, entity.Id);
    }

    public async Task Edit(EditProductPieceDto pieceDto)
    {
        // get the entity
        var entity = await repository.GetById(pieceDto.Id);
        if (entity is null)
            throw new HttpException(
                "Product piece not found",
                HttpStatusCode.NotFound
            );

        // update entity
        mapper.Map(pieceDto, entity);
        await repository.Update(entity);
        await repository.Save();
    }

    public async Task DeletePictures(DeletePiecePicturesDto dto)
    {
        var picsToDelete = dto.PictureNames.Select(x =>
            prodPicRepo.GetItemBySpec(
                new ProductPictures.GetByPath(x)
            ).Result
        );
        await DeletePictures(picsToDelete);
    }

    public async Task Delete(long id)
    {
        // detach pictures
        var pictures = await prodPicRepo.GetListBySpec(
            new ProductPictures.GetByPieceId(id)
        ).ToListAsync();
        await DeletePictures(pictures);

        // delete the entity
        await repository.Delete(id);
        await repository.Save();
    }

    private async Task DeletePictures(IEnumerable<ProductPicture?> pictures)
    {
        foreach (var pic in pictures)
        {
            if (pic is null)
                continue;

            // delete a picture physically
            pictureService.DeleteFile(pic.PicturePath);
            // delete from the database
            await prodPicRepo.Delete(pic.Id);
        }

        await prodPicRepo.Save();
    }

    public async Task SavePictures(
        IEnumerable<IFormFile> formPictures,
        long ownerId
    )
    {
        // save pics physically
        var pics = await Task.WhenAll(
            formPictures.Select(pictureService.SaveImage)
        );

        // save pics to the database
        foreach (var pic in pics)
            await prodPicRepo.Insert(new ProductPicture
            {
                PicturePath = pic,
                ProductPieceId = ownerId
            });
        await prodPicRepo.Save();
    }
}
