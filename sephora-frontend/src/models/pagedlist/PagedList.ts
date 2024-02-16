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
    currentPage: 1,
    pageSize: 0,
    totalCount: 1,
    totalPages: 1,
    hasPreviousPage: false,
    hasNextPage: false,
}
