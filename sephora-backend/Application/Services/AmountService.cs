using AutoMapper;
using CleanArchitecture.Application.Dtos.Amount;
using CleanArchitecture.Application.Interfaces;
using CleanArchitecture.Application.Specifications;
using CleanArchitecture.Domain.Entities;
using Infrastructure.Interfaces;

namespace CleanArchitecture.Application.Services;

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