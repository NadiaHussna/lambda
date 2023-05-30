declare interface UserRequestInfo extends IOfficeUser, IRequestApproval {
  approverName: string
  authorName: string
}

// NOTE: Removed IUserInfo
declare interface IBranchAction extends IAny {
  action?: BranchAction
  today?: number
}
