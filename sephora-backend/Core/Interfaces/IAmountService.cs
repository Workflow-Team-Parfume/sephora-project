using Core.Dtos.Amount;

namespace Core.Interfaces;

public interface IAmountService
{
    Task<IEnumerable<AmountDto>> Get();
    Task<AmountDto?> GetById(int id);
    Task Create(CreateAmountDto amountDTO);
    Task Edit(AmountDto amountDTO);
    Task Delete(int id);
}