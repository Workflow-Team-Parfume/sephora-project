namespace CleanArchitecture.Application.Services.Interfaces;

/**
 * <summary>
 * The piece service.
 * </summary>
 */
public interface IPieceService
{
    /**
     * <summary>
     * Get all product pieces.
     * </summary>
     * <returns>
     * Query of all product pieces.
     * </returns>
     */
    IQueryable<LightProductPieceDto> Get();

    /**
     * <summary>
     * Get all product pieces with pagination.
     * </summary>
     * <param name="pageNumber">
     * The page number.
     * </param>
     * <param name="pageSize">
     * The page size.
     * </param>
     * <param name="orderBy">
     * The ordering of the product pieces.
     * </param>
     * <param name="selectBy">
     * The criteria to select the product pieces.
     * </param>
     * <returns>
     * <see cref="PagedListInfo{T}"/> of product pieces.
     * </returns>
     */
    Task<PagedListInfo<LightProductPieceDto>> Get(
     int pageNumber,
     int pageSize,
     string? orderBy = null,
     string? selectBy = null
    );

    /**
     * <summary>
     * Get a product piece by ID.
     * </summary>
     * <param name="id">
     * The product piece ID.
     * </param>
     * <returns>
     * The <see cref="ProductPieceDto"/> with specified ID.
     * </returns>
     */
    Task<ProductPieceDto?> GetById(long id);
    
    /**
     * <summary>
     * Create a product piece.
     * </summary>
     * <param name="pieceDto">
     * The product piece DTO.
     * </param>
     */
    Task Create(CreateProductPieceDto pieceDto);
    
    /**
     * <summary>
     * Edit a product piece.
     * </summary>
     * <param name="pieceDto">
     * The product piece DTO.
     * </param>
     */
    Task Edit(EditProductPieceDto pieceDto);
    
    /**
     * <summary>
     * Delete a product piece.
     * </summary>
     * <param name="id">
     * The product piece ID.
     * </param>
     */
    Task Delete(long id);
}
