export interface IPaginatedResponse<T> {
    pagination: {
        page: number;
        size: number;
        total_pages: number;
    };
    data: T;
}
