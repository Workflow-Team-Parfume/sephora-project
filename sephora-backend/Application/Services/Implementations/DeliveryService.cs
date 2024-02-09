namespace CleanArchitecture.Application.Services.Implementations;

public class DeliveryService(
    IRepository<DeliveryEntity> deliveryRepository,
    IMapper mapper
) : IDeliveryService
{
    public async Task<IEnumerable<DeliveryDto>> Get()
        => mapper.Map<IEnumerable<DeliveryDto>>(
            await deliveryRepository.GetAll()
        );

    public async Task<DeliveryDto?> GetById(int id)
    {
        DeliveryEntity? entity = await deliveryRepository.GetById(id);
        return entity is null ? null : mapper.Map<DeliveryDto>(entity);
    }

    public async Task Create(CreateDeliveryDto deliveryDto)
    {
        DeliveryEntity entity = mapper.Map<DeliveryEntity>(deliveryDto);
        await deliveryRepository.Insert(entity);
        await deliveryRepository.Save();
    }

    public async Task Edit(DeliveryDto deliveryDto)
    {
        DeliveryEntity entity = mapper.Map<DeliveryEntity>(deliveryDto);
        await deliveryRepository.Update(entity);
        await deliveryRepository.Save();
    }

    public async Task Delete(int id)
    {
        await deliveryRepository.Delete(id);
        await deliveryRepository.Save();
    }
}