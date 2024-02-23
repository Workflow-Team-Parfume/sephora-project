namespace CleanArchitecture.Application.Services.Interfaces;

public interface IDeliveryService
{
    IQueryable<DeliveryDto> Get();

    async Task<PagedListInfo<DeliveryDto>> Get(
        int pageNumber,
        int pageSize,
        bool fromStart = true
    ) => await Get().ToPagedListInfo(pageNumber, pageSize, fromStart);

    Task<DeliveryDto?> GetById(long id);
    Task Create(CreateDeliveryDto deliveryDto);
    Task Edit(DeliveryDto deliveryDto);
    Task Delete(long id);
}
