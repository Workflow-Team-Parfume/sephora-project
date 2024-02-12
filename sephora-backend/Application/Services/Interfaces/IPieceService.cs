namespace CleanArchitecture.Application.Services.Interfaces;

public interface IPieceService
{
    Task<IEnumerable<ProductPieceDto>> Get();
    Task<ProductPieceDto?> GetById(long id);
    Task Create(CreateProductPieceDto pieceDto);
    Task Edit(EditProductPieceDto pieceDto);
    Task Delete(long id);
}
