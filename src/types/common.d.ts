export interface PagingResponse<T> {
  contents: Array<T>;
  totalElements: number;
}
