declare interface DashboardMapper {
  search: IAny
  sort: IAny
  filter: IAny
}

declare interface DashboardQueryError {
  errType: number
  err: IAny
}