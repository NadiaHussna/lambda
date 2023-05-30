declare type FileFormat = import('../../src/static/constants').FileFormat
declare type ContentType = import('../../src/static/constants').ContentType
declare interface FileBase64 {
  url?: string
  base64?: string
  date?: string
  name?: string
  path?: string
  size?: number
  type?: ContentType
}
declare interface DocumentSave extends FileBase64 {
  id?: Buffer
  clientId?: Buffer
  location?: string
  actualName?: string // from fe
  contentType?: ContentType // from fe e.g. image/jpeg
  branchName?: string
  timestamp?: number
  filename?: string
}

declare interface S3Object {
  buffer: Buffer
  base64?: string
  fileFormat?: FileFormat
  filename: string // with fileFormat as well
  location?: string
  key?: string
}

declare interface ReportSave extends FileBase64 {
  reportId?: number
  clientId?: TableID
  branchId?: TableID
  transactionRef?: string
  filename?: string
  location?: string
  timestamp?: number | string
  contentType?: ContentType
  reportType?: string
  buffer?: Buffer
}
