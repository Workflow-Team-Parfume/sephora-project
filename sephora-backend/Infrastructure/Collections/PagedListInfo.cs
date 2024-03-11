namespace Infrastructure.Collections;

public record PagedListInfo<T>
(
    IEnumerable<T> Items = default!,
    int CurrentPage = 0,
    int PageSize = 0,
    int TotalPages = 0,
    int TotalCount = 0,
    bool HasPreviousPage= false,
    bool HasNextPage = false
);
