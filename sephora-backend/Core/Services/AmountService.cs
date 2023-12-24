using AutoMapper;
using Core.Dtos.Amount;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;

namespace Core.Services;

public class AmountService(
    IRepository<Amount> amountRepository, 
    IMapper mapper) 
    : IAmountService
{
    public async Task Create(CreateAmountDto amountDTO)
    {
        await amountRepository.Insert(mapper.Map<Amount>(amountDTO));
        await amountRepository.Save();
    }

    public async Task Delete(int id)
    {
        if (await amountRepository.GetById(id) == null)
            return;

        await amountRepository.Delete(id);
        await amountRepository.Save();
    }

    public async Task Edit(AmountDto amountDTO)
    {
        await amountRepository.Update(mapper.Map<Amount>(amountDTO));
        await amountRepository.Save();
    }

    public async Task<IEnumerable<AmountDto>> Get()
    {
        return mapper.Map<IEnumerable<AmountDto>>(await amountRepository.GetAll());
    }

    public async Task<AmountDto?> GetById(int id)
    {
        Amount? amount = await amountRepository.GetItemBySpec(new Amounts.GetById(id));

        if (amount == null)
            throw new Exception();

        return mapper.Map<AmountDto>(amount);
    }
}