using Ardalis.Specification;
using Core.Entities;

namespace Core.Specifications;

public class Parfumes
{
    public class GetAll : Specification<Parfume>
    {
        public GetAll()
        {
            Query
                .Include(x => x.ParfumePieces)
                .ThenInclude(x => x.Amount)
                .Include(x => x.Product)
                .ThenInclude(x => x.Brand)
                .Include(x => x.Product)
                .ThenInclude(x => x.Category);
                    
        }
    }
    public class GetById : Specification<Parfume>
    {
        public GetById(int id)
        {
            Query
                .Where(x => x.Id == id)
                .Include(x => x.ParfumePieces)
                .ThenInclude(x => x.Amount)
                .Include(x => x.Product)
                .ThenInclude(x => x.Brand)
                .Include(x => x.Product)
                .ThenInclude(x => x.Category);
        }
    }
}