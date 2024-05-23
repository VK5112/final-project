export interface IPagination<T> {
    page: number
    total: number
    data: T[]
}