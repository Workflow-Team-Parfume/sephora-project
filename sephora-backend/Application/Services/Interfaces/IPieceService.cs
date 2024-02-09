namespace CleanArchitecture.Application.Services.Interfaces;

public interface IPieceService
{
    Task<IEnumerable<ProductPieceDTO>> Get();
    Task<ProductPieceDTO?> GetById(long id);
    Task Create(CreateProductPieceDto pieceDto);
    Task Edit(EditProductPieceDTO pieceDto);
    Task Delete(long id);
}
