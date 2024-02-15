namespace Infrastructure.Collections;

public static class PagedListExtensions
{
    public static IPagedList<T> ToPagedList<T>(
        this IEnumerable<T> source,
        int pageNumber,
        int pageSize,
        bool fromStart = true
    ) => new PagedList<T>(source, pageNumber, pageSize, fromStart);

    public static PagedListInfo<T> ToPagedListInfo<T>(
        this IPagedList<T> source
    ) => new(
        source,
        source.CurrentPage,
        source.PageSize,
        source.TotalPages,
        source.Count,
        source.HasPreviousPage,
        source.HasNextPage
    );

    public static PagedListInfo<T> ToPagedListInfo<T>(
        this IEnumerable<T> source,
        int pageNumber,
        int pageSize,
        bool fromStart = true
    ) => source.ToPagedList(pageNumber, pageSize, fromStart).ToPagedListInfo();
}
