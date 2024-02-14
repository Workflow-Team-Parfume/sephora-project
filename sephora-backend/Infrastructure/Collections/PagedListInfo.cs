namespace Infrastructure.Collections;

public record PagedListInfo<T>
(
    IEnumerable<T> Items,
    int CurrentPage,
    int PageSize,
    int TotalPages,
    int TotalCount
);
