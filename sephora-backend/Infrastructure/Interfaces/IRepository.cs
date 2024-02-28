namespace Infrastructure.Interfaces;

public interface IRepository<TEntity> where TEntity : class
{
    IQueryable<TEntity> GetAll();

    Task<TEntity?> GetById(object id);

    Task Insert(TEntity entity);

    Task Delete(object id);

    Task Delete(TEntity entityToDelete);

    Task Update(TEntity entityToUpdate);

    Task<TEntity?> GetItemBySpec(ISpecification<TEntity> specification);
    IQueryable<TEntity> GetListBySpec(ISpecification<TEntity> specification);

    Task<int> DeleteBySpec(ISpecification<TEntity> specification);
    
    Task Save();
}
