export interface ColumnConfig<T> {
  title: string
  dataProperty: keyof T
}

export interface PaginationConfig {
  totalRecords: number
  pageSize: number
}
