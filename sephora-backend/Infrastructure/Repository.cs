namespace Infrastructure;

/**
 * <summary>
 * The repository class represents a generic repository
 * of the entity type in the database.
 * </summary>
 */
public sealed class Repository<TEntity>(PerfumeDbContext context) 
    : IRepository<TEntity>
    where TEntity : class
{
    private readonly DbSet<TEntity> _dbSet = context.Set<TEntity>();

    public async Task Save() => await context.SaveChangesAsync();

    public IQueryable<TEntity> GetAll()
        => _dbSet.AsQueryable();

    public async Task<TEntity?> GetById(object id)
        => await _dbSet.FindAsync(id);

    public async Task Insert(TEntity entity)
        => await _dbSet.AddAsync(entity);

    public async Task Delete(object id)
    {
        TEntity? entityToDelete = await _dbSet.FindAsync(id);
        if (entityToDelete != null)
            await Delete(entityToDelete);
    }

    public async Task Delete(TEntity entityToDelete)
    {
        await Task.Run(() =>
        {
            if (context.Entry(entityToDelete).State == EntityState.Detached)
                _dbSet.Attach(entityToDelete);

            _dbSet.Remove(entityToDelete);
        });
    }

    public async Task Update(TEntity entityToUpdate)
    {
        await Task.Run(() =>
        {
            _dbSet.Attach(entityToUpdate);
            context.Entry(entityToUpdate).State = EntityState.Modified;
        });
    }

    // working with specifications
    public IQueryable<TEntity> GetListBySpec(
        ISpecification<TEntity> specification
    ) => ApplySpecification(specification);

    public async Task<TEntity?> GetItemBySpec(
        ISpecification<TEntity> specification
    )
        => await ApplySpecification(specification).FirstOrDefaultAsync();

    public async Task<int> DeleteBySpec(
        ISpecification<TEntity> specification
    )
        => await ApplySpecification(specification).ExecuteDeleteAsync();


    private IQueryable<TEntity> ApplySpecification(
        ISpecification<TEntity> specification
    )
    {
        var evaluator = new SpecificationEvaluator();
        return evaluator.GetQuery(_dbSet, specification);
    }
}
