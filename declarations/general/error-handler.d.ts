declare interface IHandler<R, E> {
  d?: R
  e?: E
}
declare interface IErrorCode {
  statusCode: number
  errorCode: string
  message: string
  stack?: IAny
}
declare interface ICustomError extends Error {
  errKey: IErrorCode
  errObj?: IAny
  errorList?: string[]
  funcName?: string
  desc?: string
  validator?: string

  // declaring as non-optional from Error class
  message?: string
  name?: 'ICustomError'
  code?: string
}
declare interface ErrorContainer {
  ip: string
  username: string
  endpoint: string
  error: ICustomError
}
declare interface GlobalAuditLog {
  username: string
  source: string // endpoint
  status: 'Successful' | 'Failed'
  flag: boolean
  fileSize?: string
  filePath?: string

  // TODO Check if this really is an array of object
  requestId?: number | number[]

  permKey?: string
  inputArgs?: IAny
}

// TODO: Remove this
declare interface ErrorLogger {
  errKey: string | null
  errObj: IAny
  ip?: string
  username?: string
  funcName?: string
  errList?: string[]
  message?: string
  exceptionName?: string
  inputArgs?: IAny
  pLevel?: string
  canCreateLog: boolean
}
