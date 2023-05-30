declare interface Email {
  Destination: {
    ToAddresses: [string]
  }
  Message: {
    Body: {
      Text: {
        Data: string
        Charset: 'UTF-8'
      }
      Html: {
        Data: string
      }
    }
    Subject: {
      Data: string
      Charset: 'UTF-8'
    }
  }
  Source: string
  ConfigurationSetName: string
}

declare interface EmailData {
  receiverEmail: string
  subject: string
  notificationTitle?: string
  emailSubject?: string
  userId: Buffer
  sender?: SenderData // without this, sends email only
  receiver?: ReceiverData
  search: SearchData
  content: TTrueAny
}

declare interface SenderData {
  username?: string
  name: string
  source: Source
}

declare interface ReceiverData {
  username?: string
  userType: UserType
  moduleType: PermissionModule
  pLevel: string
}

declare interface SearchData {
  key: string
  type: SearchType
  id?: string
}
