namespace Infrastructure.Collections;

/**
 * <summary>
 * The paged list info.
 * </summary>
 * <typeparam name="T">
 * The type of the items.
 * </typeparam>
 */
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
