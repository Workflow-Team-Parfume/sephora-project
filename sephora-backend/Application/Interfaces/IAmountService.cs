
using CleanArchitecture.Application.Dtos.Amount;

namespace CleanArchitecture.Application.Interfaces;

public interface IAmountService
{
    Task<IEnumerable<AmountDto>> Get();
    Task<AmountDto?> GetById(int id);
    Task Create(CreateAmountDto amountDto);
    Task Edit(AmountDto amountDto);
    Task Delete(int id);
}