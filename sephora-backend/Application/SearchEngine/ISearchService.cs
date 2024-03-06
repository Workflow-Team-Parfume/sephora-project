namespace CleanArchitecture.Application.SearchEngine;

public interface ISearchService<T>
{
    /**
     * <summary>Indexes the entity in the search engine</summary>
     * <param name="entity">The entity to index</param>
     */
    void Index(T entity);

    /**
     * <summary>Indexes the entities in the search engine</summary>
     * <param name="entities">The entities to index</param>
     */
    void Index(IEnumerable<T> entities)
    {
        var enumerated = entities is IQueryable 
            ? entities.ToList() 
            : entities;
        foreach (var entity in enumerated)
            Index(entity);
    }

    /**
     * <summary>Removes the entity from the search engine.</summary>
     * <param name="entity">The entity to remove</param>
     */
    void Remove(T entity);

    /**
     * <summary>Execute the search</summary>
     * <param name="searchTerm">The search phrase</param>
     * <param name="pageNumber">The page number</param>
     * <param name="pageSize">The page size</param>
     * <returns>The search results</returns>
     */
    Task<PagedListInfo<T>> Search(
        string searchTerm,
        int pageNumber = 1,
        int pageSize = 10
    );
} 
