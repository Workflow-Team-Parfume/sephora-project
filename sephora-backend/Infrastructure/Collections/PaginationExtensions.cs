namespace Infrastructure.Collections;

public static class PaginationExtensions
{
    public static IPagedList<T> ToPagedList<T>(
        this IEnumerable<T> source,
        int pageNumber,
        int pageSize
    ) => new PagedList<T>(source, pageNumber, pageSize);

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
        int pageSize
    ) => source.ToPagedList(pageNumber, pageSize).ToPagedListInfo();
    
    // syntax: https://dynamic-linq.net/basic-simple-query
    public static async Task<PagedListInfo<T>> ToPagedListInfoAsync<T>(
        this IQueryable<T> source,
        int pageNumber,
        int pageSize,
        string? orderBy = null,
        string? selectBy = null
    )
    {
        IQueryable<T> list = source;
        if (!String.IsNullOrWhiteSpace(orderBy))
            list = list.OrderBy(orderBy);
        if (!String.IsNullOrWhiteSpace(selectBy))
            list = list.Where(selectBy);

        return (await list.ToListAsync())
            .ToPagedListInfo(pageNumber, pageSize);
    }
}
