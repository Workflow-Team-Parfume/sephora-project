namespace CleanArchitecture.Application.Services.Interfaces;

public interface IDeliveryService
{
    Task<IEnumerable<DeliveryDto>> Get();
    Task<DeliveryDto?> GetById(int id);
    Task Create(CreateDeliveryDto deliveryDto);
    Task Edit(DeliveryDto deliveryDto);
    Task Delete(int id);
}
