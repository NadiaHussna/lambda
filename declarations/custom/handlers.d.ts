declare interface IOptions {
  endpoint?: string
  apiVersion: string
}

declare interface IEvent<T> extends PermissionProfile {
  ip: string
  username: string
  deviceToken?: string
  encryptionKey?: string
  validator?: string
  input: T
}

declare interface ICommonResponse {
  status: boolean
  message?: string
}
