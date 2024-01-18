using Ardalis.Specification;
using Ardalis.Specification.EntityFrameworkCore;
using Infrastructure.Data;
using Infrastructure.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure;

public class Repository<TEntity>(PerfumeDbContext context) : IRepository<TEntity>
    where TEntity : class
{
    private DbSet<TEntity> dbSet = context.Set<TEntity>();

    public async Task Save()
    {
        await context.SaveChangesAsync();
    }

    public virtual async Task<IEnumerable<TEntity>> GetAll()
    {
        return await dbSet.ToListAsync();
    }

    public virtual async Task<TEntity?> GetById(object id)
    {
        return await dbSet.FindAsync(id);
    }

    public virtual async Task Insert(TEntity entity)
    {
        await dbSet.AddAsync(entity);
    }

    public virtual async Task Delete(object id)
    {
        TEntity? entityToDelete = await dbSet.FindAsync(id);
        if (entityToDelete != null)
            await Delete(entityToDelete);
    }

    public virtual Task Delete(TEntity entityToDelete)
    {
        return Task.Run(() =>
        {
            if (context.Entry(entityToDelete).State == EntityState.Detached)
            {
                dbSet.Attach(entityToDelete);
            }
            dbSet.Remove(entityToDelete);
        });
    }

    public virtual Task Update(TEntity entityToUpdate)
    {
        return Task.Run(() =>
        {
            dbSet.Attach(entityToUpdate);
            context.Entry(entityToUpdate).State = EntityState.Modified;
        });
    }

    // working with specifications
    public async Task<IEnumerable<TEntity>> GetListBySpec(ISpecification<TEntity> specification)
    {
        return await ApplySpecification(specification).ToListAsync();
    }

    public async Task<TEntity?> GetItemBySpec(ISpecification<TEntity> specification)
    {
        return await ApplySpecification(specification).FirstOrDefaultAsync();
    }

    private IQueryable<TEntity> ApplySpecification(ISpecification<TEntity> specification)
    {
        var evaluator = new SpecificationEvaluator();
        return evaluator.GetQuery(dbSet, specification);
    }
}