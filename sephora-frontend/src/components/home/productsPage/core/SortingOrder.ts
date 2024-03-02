export default interface SortingOrder {
    get nameEn(): string;
    get nameUa(): string;
    get value(): string;
}

export const Orders: SortingOrder[] = [
    {
        nameEn: 'Price',
        nameUa: 'Ціна',
        value: 'product.Price'
    },

    {
        nameEn: 'Popularity',
        nameUa: 'Популярність',
        value: 'product.AverageRating'

    }
]
export const Directions: SortingOrder[] = [
    {
        nameEn: 'Ascending',
        nameUa: 'За зростанням',
        value: ' asc'
    },
    {
        nameEn: 'Descending',
        nameUa: 'За спаданням',
        value: ' desc'
    }
]
