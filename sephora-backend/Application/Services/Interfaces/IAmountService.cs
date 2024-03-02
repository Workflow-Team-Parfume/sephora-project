namespace CleanArchitecture.Application.Services.Interfaces;

public interface IAmountService
{
    IQueryable<AmountDto> Get();

    async Task<PagedListInfo<AmountDto>> Get(
        int pageNumber,
        int pageSize,
        string? orderBy = null,
        string? selectBy = null
    ) => await Get().ToPagedListInfoAsync(pageNumber, pageSize, orderBy, selectBy);

    Task<AmountDto?> GetById(int id);
    Task Create(CreateAmountDto amountDto);
    Task Edit(AmountDto amountDto);
    Task Delete(int id);
}
