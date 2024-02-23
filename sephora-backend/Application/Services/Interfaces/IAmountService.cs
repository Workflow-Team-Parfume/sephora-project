namespace CleanArchitecture.Application.Services.Interfaces;

public interface IAmountService
{
    IQueryable<AmountDto> Get();

    async Task<PagedListInfo<AmountDto>> Get(
        int pageNumber,
        int pageSize,
        string? orderBy = null,
        string? selectBy = null,
        bool fromStart = false
    )
    {
        // TODO: Implement selection by dynamic where clause
        string? preparedSelectBy = null;

        return await Get().ToPagedListInfoAsync(
            pageNumber,
            pageSize,
            orderBy,
            preparedSelectBy,
            fromStart
        );
    }

    Task<AmountDto?> GetById(int id);
    Task Create(CreateAmountDto amountDto);
    Task Edit(AmountDto amountDto);
    Task Delete(int id);
}
