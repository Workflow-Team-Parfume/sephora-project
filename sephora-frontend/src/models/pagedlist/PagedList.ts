export default interface PagedList<T> {
    items: T[],
    currentPage: number,
    totalPages: number
    pageSize: number,
    totalCount: number,
    hasPreviousPage: boolean,
    hasNextPage: boolean,
}

export const DefaultPagedList: PagedList<never> = {
    items: [],
    currentPage: 0,
    pageSize: 0,
    totalCount: 0,
    totalPages: 0,
    hasPreviousPage: false,
    hasNextPage: false,
}
