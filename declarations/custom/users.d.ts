declare interface PermissionProfile {
  grant: 'hq' | 'branch'
  userType: UserType
  pLevel: PermissionLevel,
  permission: IAny
}

declare interface UserInfo extends IBranch, IOfficeUser, PermissionProfile {
  branchName?: string
}

/** Contains the entire User inclusive of UserInfo */
declare interface UserProfile extends UserInfo, IUserGroup, IUserGroupRole, IUserRole {}

declare interface FullUserProfile extends UserProfile, IRequestApproval {
  userGroups: string | string[]
  userGroupIds: string | string[]
  rolePermission: string
  groupPermission: string
}

declare interface AgentProfile extends IAgent, IBranch {}

declare interface ClientInfo extends IClient, IClientAssessment {}
