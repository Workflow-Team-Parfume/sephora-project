using System.Text.Json.Serialization;

namespace Infrastructure.Collections;

public interface IPagedList<T> : IList<T>
{
    int CurrentPage { get; }
    int PageSize { get; }
    int TotalCount { get; }
    int TotalPages { get; }
    
    bool HasPreviousPage => CurrentPage > 1;
    bool HasNextPage => CurrentPage < TotalPages;
    
    PagedListInfo<T> ToPagedListInfo()
        => new(this, CurrentPage, PageSize, TotalPages, TotalCount);
}
