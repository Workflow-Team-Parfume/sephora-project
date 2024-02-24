namespace CleanArchitecture.Application.Services.Interfaces;

public interface IPieceService
{
    IQueryable<ProductPieceDto> Get();

    async Task<PagedListInfo<ProductPieceDto>> Get(
        int pageNumber,
        int pageSize,
        string? orderBy = null,
        string? selectBy = null,
        bool fromStart = false
    ) => await Get().ToPagedListInfoAsync(
        pageNumber,
        pageSize,
        orderBy,
        selectBy,
        fromStart
    );

    Task<ProductPieceDto?> GetById(long id);
    Task Create(CreateProductPieceDto pieceDto);
    Task Edit(EditProductPieceDto pieceDto);
    Task Delete(long id);
}
