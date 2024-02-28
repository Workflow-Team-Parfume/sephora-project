namespace Infrastructure;

public class Repository<TEntity>(PerfumeDbContext context) : IRepository<TEntity>
    where TEntity : class
{
    private readonly DbSet<TEntity> _dbSet = context.Set<TEntity>();

    public async Task Save() => await context.SaveChangesAsync();

    public virtual IQueryable<TEntity> GetAll()
        => _dbSet.AsQueryable();

    public virtual async Task<TEntity?> GetById(object id)
        => await _dbSet.FindAsync(id);

    public virtual async Task Insert(TEntity entity)
        => await _dbSet.AddAsync(entity);

    public virtual async Task Delete(object id)
    {
        TEntity? entityToDelete = await _dbSet.FindAsync(id);
        if (entityToDelete != null)
            await Delete(entityToDelete);
    }

    public virtual async Task Delete(TEntity entityToDelete)
    {
        await Task.Run(() =>
        {
            if (context.Entry(entityToDelete).State == EntityState.Detached)
                _dbSet.Attach(entityToDelete);

            _dbSet.Remove(entityToDelete);
        });
    }

    public virtual async Task Update(TEntity entityToUpdate)
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
