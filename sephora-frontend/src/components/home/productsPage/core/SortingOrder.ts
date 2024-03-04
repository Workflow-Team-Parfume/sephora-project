export default interface SortingOrder {
    // get nameEn(): string;
    // get nameUa(): string;
    get key(): string;
    get value(): string;
}

export const Orders: SortingOrder[] = [
    {
        // nameEn: 'price',
        // nameUa: 'вартістю',
        key: 'sortBy.price',
        value: 'price'
    },
    {
        key: 'sortBy.popularity',
        // nameEn: 'popularity',
        // nameUa: 'популярністю',
        value: 'product.AverageRating'
    },
    {
        key: 'sortBy.date',
        // nameEn: 'date',
        // nameUa: 'датою',
        value: 'createdAt'
    },
]
export const Directions: SortingOrder[] = [
    {
        // nameEn: 'to low',
        // nameUa: 'за спаданням',
        key: 'sortBy.toLow',
        value: 'desc'
    },
    {
        // nameEn: 'to high',
        // nameUa: 'за зростанням',
        key: 'sortBy.toHigh',
        value: 'asc'
    },
]
