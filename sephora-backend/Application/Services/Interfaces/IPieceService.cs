namespace CleanArchitecture.Application.Services.Interfaces;

public interface IPieceService
{
    Task<IEnumerable<ProductPieceDto>> Get();
    
    async Task<PagedListInfo<ProductPieceDto>> Get(
        int pageNumber,
        int pageSize,
        bool fromStart = true
    ) => (await Get()).ToPagedListInfo(pageNumber, pageSize, fromStart);
    
    Task<ProductPieceDto?> GetById(long id);
    Task Create(CreateProductPieceDto pieceDto);
    Task Edit(EditProductPieceDto pieceDto);
    Task Delete(long id);
}
