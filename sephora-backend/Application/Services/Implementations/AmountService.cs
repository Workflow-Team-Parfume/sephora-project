namespace CleanArchitecture.Application.Services.Implementations;

public class AmountService(
    IRepository<Amount> amountRepository,
    IMapper mapper)
    : IAmountService
{
    public async Task Create(CreateAmountDto amountDto)
    {
        await amountRepository.Insert(mapper.Map<Amount>(amountDto));
        await amountRepository.Save();
    }

    public async Task Delete(int id)
    {
        if (await amountRepository.GetById(id) == null)
            return;

        await amountRepository.Delete(id);
        await amountRepository.Save();
    }

    public async Task Edit(AmountDto amountDto)
    {
        await amountRepository.Update(mapper.Map<Amount>(amountDto));
        await amountRepository.Save();
    }

    public IQueryable<AmountDto> Get()
        => amountRepository.GetAll()
            .ProjectTo<AmountDto>(mapper.ConfigurationProvider);

    public async Task<AmountDto?> GetById(int id)
    {
        Amount? amount = await amountRepository.GetItemBySpec(
            new Amounts.GetById(id)
        );
        return amount is null ? null : mapper.Map<AmountDto>(amount);
    }
}
