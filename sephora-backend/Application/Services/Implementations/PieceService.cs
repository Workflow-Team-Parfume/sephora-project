namespace CleanArchitecture.Application.Services.Implementations;

public class PieceService(
    IRepository<ProductPiece> repository,
    IPictureService pictureService,
    IRepository<ProductPicture> prodPicRepo,
    IMapper mapper
) : IPieceService
{
    public async Task<IEnumerable<ProductPieceDto>> Get()
        => mapper.Map<IEnumerable<ProductPieceDto>>(
            await repository.GetListBySpec(new ProductPieces.GetAll())
                .ToListAsync()
        );

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
        // update entity
        var entity = mapper.Map<ProductPiece>(pieceDto);
        await repository.Update(entity);
        await repository.Save();

        // update its pictures

        // delete unnecessary pictures
        var picsToDelete = pieceDto.DeletePhotos.Select(
            x => prodPicRepo.GetById(x).Result
        );
        await DeletePictures(picsToDelete);

        // add new pictures
        await SavePictures(pieceDto.NewPhotos, entity.Id);
    }

    public async Task Delete(long id)
    {
        // detach pictures
        var pictures = await prodPicRepo.GetListBySpec(
            new ProductPictures.GetPicsByPieceId(id)
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

    private async Task SavePictures(
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
