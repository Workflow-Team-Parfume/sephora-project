
namespace CleanArchitecture.Application.Services.Interfaces;

public interface IAmountService
{
    Task<IEnumerable<AmountDto>> Get();

    async Task<PagedListInfo<AmountDto>> Get(
        int pageNumber,
        int pageSize,
        bool fromStart = true
    ) => (await Get()).ToPagedListInfo(pageNumber, pageSize, fromStart);
    
    Task<AmountDto?> GetById(int id);
    Task Create(CreateAmountDto amountDto);
    Task Edit(AmountDto amountDto);
    Task Delete(int id);
}
