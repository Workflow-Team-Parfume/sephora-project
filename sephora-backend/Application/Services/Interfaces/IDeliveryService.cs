namespace CleanArchitecture.Application.Services.Interfaces;

public interface IDeliveryService
{
    IQueryable<DeliveryDto> Get();

    async Task<PagedListInfo<DeliveryDto>> Get(
        int pageNumber,
        int pageSize,
        string? orderBy = null,
        string? selectBy = null
    ) => await Get().ToPagedListInfoAsync(pageNumber, pageSize, orderBy, selectBy);

    Task<DeliveryDto?> GetById(long id);
    Task Create(CreateDeliveryDto deliveryDto);
    Task Edit(DeliveryDto deliveryDto);
    Task Delete(long id);
}
