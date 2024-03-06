namespace CleanArchitecture.Application.SearchEngine;

// https://lucenenet.apache.org/
// https://ankit68543.medium.com/implementing-elastic-search-with-lucene-net-core-849084bb752

public interface ISearchService<TEntity, TDto>
{
    void Index(TEntity entity);
    void Index(TDto dto);

    void Index(IEnumerable<TEntity> entities)
    {
        var enumerated = entities is IQueryable 
            ? entities.ToList() 
            : entities;
        foreach (var entity in enumerated)
            Index(entity);
    }
    void Index(IEnumerable<TDto> dtos)
    {
        var enumerated = dtos is IQueryable 
            ? dtos.ToList() 
            : dtos;
        foreach (var entity in enumerated)
            Index(entity);
    }

    void Remove(TEntity entity);
    void Remove(TDto dto);

    Task<PagedListInfo<TDto>> Search(
        string searchTerm,
        int pageNumber = 1,
        int pageSize = 10
    );
} 
