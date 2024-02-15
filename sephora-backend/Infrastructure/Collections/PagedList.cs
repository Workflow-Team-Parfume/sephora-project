namespace Infrastructure.Collections;

public class PagedList<T> : List<T>, IPagedList<T>
{
    public int CurrentPage { get; }
    public int PageSize { get; }
    public int TotalPages { get; }
    public int TotalCount { get; }
    
    public bool HasPreviousPage { get; }
    public bool HasNextPage { get; }

    /**
     * <summary>
     * Create a paged list instance. <br/>
     * It will hold only the items that belong to the current page
     * and related metadata.
     * </summary>
     * <param name="items">Collection to be paginated</param>
     * <param name="pageNumber">Current page number</param>
     * <param name="pageSize">Number of items per page</param>
     * <param name="fromStart">
     * Whether to start from the first page or the last one
     * </param>
     * <exception cref="ArgumentOutOfRangeException">
     * PageSize is less than 1
     * </exception>
     */
    public PagedList(IEnumerable<T> items, int pageNumber, int pageSize, bool fromStart = true)
    {
        // PageSize is [1, 100]
        PageSize = pageSize > 0
            // [1, +inf) case
            ? pageSize > 100 ? 100 : pageSize
            // < 1 case
            : throw new ArgumentOutOfRangeException(nameof(pageSize));

        var enumerable = items.ToList();
        
        CurrentPage = pageNumber;
        TotalCount = enumerable.Count;
        TotalPages = (int)Math.Ceiling(TotalCount / (double)PageSize);
        
        HasPreviousPage = pageNumber > 1;
        HasNextPage = pageNumber < TotalPages;
        
        AddRange(fromStart
            ? enumerable.Skip((pageNumber - 1) * pageSize).Take(pageSize)
            : enumerable.SkipLast((pageNumber - 1) * pageSize).TakeLast(pageSize)
        );
    }
}
