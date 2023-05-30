declare type Source = 'branch' | 'hq' | 'agent' | 'client'

declare type UserType = 'ce' | 'systemadmin' | 'finance' | 'operations' | 'agent'

declare type PermissionModule = 'actions' | 'reviewApproval'

declare type SearchType =
  | 'password'
  | 'order'
  | 'case'
  | 'transaction'
  | 'request-approve'
  | 'request-reject'
  | 'request-reroute'
  | 'request-duedate'
  | 'groups'
  | 'roles'
  | 'users'
  | 'bulk-upload'
  | 'fund-upload'
  | 'user-bulk-upload'

declare type BranchAction = 'approve' | 'reject' | 'reroute' | 'due date extension'

declare type TableID = Buffer | string | number

declare type PermissionLevel = 'auto-authorizer' | 'checker' | 'checker(edited)' | 'maker' | 'maker(edited)' | 'general access'

declare type DefaultUnitList = 'day' | 'min' | 'hour'

declare type CategoryAction = 'Reroute' | 'Trigger'

declare type CategoryType = 'Edd' | 'Transaction'
