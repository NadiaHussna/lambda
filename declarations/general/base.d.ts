/* cSpell?:disable */
/**
 * Contains base interfaces of tables, main input and main output
 */

declare type TableList = import('../constants/table').TableList
declare type TableType =
  | IAgent
  | IApplication
  | IAppLog
  | IAuditLog
  | IBranch
  | ICaseTracker
  | IChannel
  | IChargeFee
  | IClient
  | IClientAssessment
  | ICollectionBank
  | ICoolOff
  | IDdaFpx
  | IDefaultUnit
  | IDepartment
  | IDistributionHistory
  | IDocument
  | IDocumentQueue
  | IDocumentUpload
  | IEdd
  | IEddCase
  | IEddMaintainable
  | IEddModule
  | IEddReason
  | IEffectiveList
  | IEmailBounce
  | IFpxBank
  | IFundAmp
  | IFundDistribution
  | IFundDocument
  | IFundHoliday
  | IFundNav
  | IFundSplit
  | IHoliday
  | IInvestment
  | IKibBank
  | IMaintainable
  | IMasterClient
  | IModuleQuestion
  | IModuleReason
  | INatureOfBusiness
  | INavHistory
  | INominee
  | INomineeBank
  | INotification
  | IOccupation
  | IOfficeUser
  | IOptions
  | IPayment
  | IPaymentInfo
  | IPreGeneral
  | IPurgeRetention
  | IQuestion
  | IRecommendation
  | IRedemptionFee
  | IRedemptionSwitchCharge
  | IReportDocuments
  | IRequestApproval
  | IRiskExpiration
  | ISalutation
  | ISeenClick
  | ISeenDashboard
  | ISocketUser
  | IStatusTracker
  | ISwitchCheck
  | ISwitchFee
  | ISwitchMultiple
  | ISwitchSettlement
  | ISwitchTransfer
  | ITomsUpdate
  | ITransactionReason
  | ITransactionStatusList
  | ITransferFee
  | ITransferMultiple
  | IUserGroup
  | IUserGroupIdList
  | IUserGroupRole
  | IUserRole
  | IUTAccount
  | IUtmc

declare type IAgent = import('../../src/models/index').Agent
declare type IApplication = import('../../src/models/index').Application
declare type IAppLog = import('../../src/models/index').AppLog
declare type IAuditLog = import('../../src/models/index').AuditLog
declare type IBranch = import('../../src/models/index').Branch
declare type ICaseTracker = import('../../src/models/index').CaseTracker
declare type IChannel = import('../../src/models/index').Channel
declare type IChargeFee = import('../../src/models/index').ChargeFee
declare type IClient = import('../../src/models/index').Client
declare type IClientAssessment = import('../../src/models/index').ClientAssessment
declare type ICollectionBank = import('../../src/models/index').CollectionBank
declare type ICoolOff = import('../../src/models/index').CoolOff
declare type IDdaFpx = import('../../src/models/index').DdaFpx
declare type IDefaultUnit = import('../../src/models/index').DefaultUnit
declare type IDepartment = import('../../src/models/index').Department
declare type IDistributionHistory = import('../../src/models/index').DistributionHistory
declare type IDocument = import('../../src/models/index').Document
declare type IDocumentQueue = import('../../src/models/index').DocumentQueue
declare type IDocumentUpload = import('../../src/models/index').DocumentUpload
declare type IEdd = import('../../src/models/index').Edd
declare type IEddCase = import('../../src/models/index').EddCase
declare type IEddMaintainable = import('../../src/models/index').EddMaintainable
declare type IEddModule = import('../../src/models/index').EddModule
declare type IEddReason = import('../../src/models/index').EddReason
declare type IEffectiveList = import('../../src/models/index').EffectiveList
declare type IEmailBounce = import('../../src/models/index').EmailBounce
declare type IFpxBank = import('../../src/models/index').FpxBank
declare type IFundAmp = import('../../src/models/index').FundAmp
declare type IFundDistribution = import('../../src/models/index').FundDistribution
declare type IFundDocument = import('../../src/models/index').FundDocument
declare type IFundHoliday = import('../../src/models/index').FundHoliday
declare type IFundNav = import('../../src/models/index').FundNav
declare type IFundSplit = import('../../src/models/index').FundSplit
declare type IHoliday = import('../../src/models/index').Holiday
declare type IInvestment = import('../../src/models/index').Investment
declare type IKibBank = import('../../src/models/index').KibBank
declare type IMaintainable = import('../../src/models/index').Maintainable
declare type IMasterClient = import('../../src/models/index').MasterClient
declare type IModuleQuestion = import('../../src/models/index').ModuleQuestion
declare type IModuleReason = import('../../src/models/index').ModuleReason
declare type INatureOfBusiness = import('../../src/models/index').NatureOfBusiness
declare type INavHistory = import('../../src/models/index').NavHistory
declare type INominee = import('../../src/models/index').Nominee
declare type INomineeBank = import('../../src/models/index').NomineeBank
declare type INotification = import('../../src/models/index').Notification
declare type IOccupation = import('../../src/models/index').Occupation
declare type IOfficeUser = import('../../src/models/index').OfficeUser
declare type IOptions = import('../../src/models/index').Options
declare type IPayment = import('../../src/models/index').Payment
declare type IPaymentInfo = import('../../src/models/index').PaymentInfo
declare type IPreGeneral = import('../../src/models/index').PreGeneral
declare type IPurgeRetention = import('../../src/models/index').PurgeRetention
declare type IQuestion = import('../../src/models/index').Question
declare type IRecommendation = import('../../src/models/index').Recommendation
declare type IRedemptionFee = import('../../src/models/index').RedemptionFee
declare type IRedemptionSwitchCharge = import('../../src/models/index').RedemptionSwitchCharge
declare type IReportDocuments = import('../../src/models/index').ReportDocuments
declare type IRequestApproval = import('../../src/models/index').RequestApproval
declare type IRiskExpiration = import('../../src/models/index').RiskExpiration
declare type ISalutation = import('../../src/models/index').Salutation
declare type ISeenClick = import('../../src/models/index').SeenClick
declare type ISeenDashboard = import('../../src/models/index').SeenDashboard
declare type ISocketUser = import('../../src/models/index').SocketUser
declare type IStatusTracker = import('../../src/models/index').StatusTracker
declare type ISwitchCheck = import('../../src/models/index').SwitchCheck
declare type ISwitchFee = import('../../src/models/index').SwitchFee
declare type ISwitchMultiple = import('../../src/models/index').SwitchMultiple
declare type ISwitchSettlement = import('../../src/models/index').SwitchSettlement
declare type ISwitchTransfer = import('../../src/models/index').SwitchTransfer
declare type ITomsUpdate = import('../../src/models/index').TomsUpdate
declare type ITransactionReason = import('../../src/models/index').TransactionReason
declare type ITransactionStatusList = import('../../src/models/index').TransactionStatusList
declare type ITransferFee = import('../../src/models/index').TransferFee
declare type ITransferMultiple = import('../../src/models/index').TransferMultiple
declare type IUserGroup = import('../../src/models/index').UserGroup
declare type IUserGroupIdList = import('../../src/models/index').UserGroupIdList
declare type IUserGroupRole = import('../../src/models/index').UserGroupRole
declare type IUserRole = import('../../src/models/index').UserRole
declare type IUTAccount = import('../../src/models/index').UtAccount
declare type IUtmc = import('../../src/models/index').Utmc
// declare interface IBranch {
//   branchId?: TableID
//   name?: string
// }

// declare interface IDocument {
//   documentId?: Buffer | string
//   path?: string
//   filename?: string
//   fileType?: string
// }

// declare interface IClient {
//   clientId?: Buffer
//   refId?: Buffer
//   dob?: string
//   idNumber?: string
//   idType?: string
//   name?: string
//   accountType?: AccountType
// }

// declare interface IUTAccount {
//   utaId?: Buffer
//   clientId?: Buffer
//   jointId?: Buffer
//   agentId?: Buffer
//   accountNo?: string
//   distributionType?: string
//   timestamp?: string
//   operatingMode?: string
//   distributionInstruction?: string
// }

// declare interface IClientAssessment {
//   riskTolerance?: string
//   hnwStatus?: string
// }

// declare interface IInvestment {
//   investmentId?: TableID
//   utaId?: Buffer
//   orderNo?: string
//   accountType?: string
//   transactionRef?: string
//   clientId?: TableID
//   clientIdNum?: string
//   clientName?: string
//   transactionType?: string
//   fundType?: string
//   distributionInstruction?: string
//   prsType?: string
//   paymentMethod?: string
//   currency?: string
//   agentId?: TableID
//   agentCode?: string
//   agentName?: string
//   lastUpdated?: string | number
//   targetDate?: string
//   statusId?: number
//   fundId?: number
//   statusRemark?: string
//   cutOffTime?: string
//   salesCharge?: number
//   isScheduled?: number
//   scheduledSalesCharge?: number
//   scheduledPayment?: string
//   investmentAmount?: string | number
//   fundCategory?: string
//   branchId?: number
//   financeException?: number
//   opsException?: number
//   submittedOn?: string
//   processDay?: string
//   batchTime?: string
//   updatedBy?: string
//   requestId?: number
//   isCancel?: number
//   canProceed?: number
//   isDaily?: number
//   lastActivity?: string | number
//   timestamp?: string
//   fundType?: string
// }

// declare interface IEmailBounce {
//   bounceEmail?: string
// }

// declare interface IDocumentQueue {
//   hardcopyQueue?: string
//   softcopyQueue?: string
// }

// declare interface IRecommendation {
//   fundId?: number
//   cutOff?: string
//   batchCutOff?: string
//   masterCutOff?: string
//   isEpf?: boolean
//   isAmp?: boolean
//   fundName?: string
//   tomsAbbr?: string
//   txAfterIop?: string
//   isSyariah?: boolean
// }

// declare interface IOfficeUser {
//   userId?: TableID
//   name?: string
//   username?: string
//   status?: string
//   requestId?: number
//   departmentId?: number
//   email?: string
//   mobileNo?: string
//   description?: string
//   ssoId?: string
// }

// declare interface IReportDocuments {
//   path?: string
//   filename?: string
//   transactionRef?: string
//   fileType?: string
// }

// declare interface IUserGroup {
//   name?: string
//   description?: string
//   accessLevel?: string
//   isActive?: boolean
//   roleIds?: string
//   branchIds?: string
//   permission?: string
//   status?: string
//   remarks?: string
//   author?: TableID
//   requestApprovalId?: number
//   lastUpdated?: string
// }

// declare interface IRequestApproval {
//   id?: number
//   value?: string
//   source?: string
//   eventType?: string
//   timestamp?: string
//   remarks?: string
//   fundData?: string
//   status?: string
//   author?: TableID
//   approver?: TableID
// }

// declare interface IAgent {
//   agentId?: TableID
//   agentName?: string
//   agentCode?: string
//   licenseCode?: string
//   nric?: string
//   branch?: number
//   email?: string
//   region?: string
//   origin?: string
//   mobileNo?: string
//   bdmName?: string
//   bdmCode?: string
//   rank?: string
//   channel?: string
//   omniEnabled?: boolean
//   uplineName?: string
//   uplineCode?: string
//   address?: string
//   addrTown?: string
//   arnEndpoint?: string
//   agentAddress: string

//   // NOTE?: Not in Agent table
//   bdmEmail?: string
// }

// declare interface IFundDocument {
//   fundDocumentId?: number
//   fundId?: number
//   fileName?: string
//   path?: string
//   uploadType?: string
//   status?: string
//   remark?: string
//   requestId?: number
// }

// declare interface INavHistory {
//   navHistoryId?: number
//   closingDay?: string
//   fundId?: number
//   navPerUnit?: string
//   latestNavPerUnit?: string
//   latestNavDate?: string
//   previousNavPerUnit?: string
//   previousNavDate?: string
// }

// declare interface IFundDistributionHistory {
//   distributionHistoryId?: number
//   closingDate?: string
//   grossDistribution?: string
//   netDistribution?: string
//   unitSplit?: string
//   fundId?: number
// }

// declare interface IDocumentUpload {
//   documentUploadId?: number
//   fundDocumentId?: number
//   fundId?: number
//   path?: string
//   fileSize?: string
//   fileName?: string
//   documentType?: string
//   isLatest?: boolean
// }

// declare interface IUserGroupRole {
//   userGroupRoleId?: number
//   permission?: string
//   groupIds?: string
// }

// declare interface IDepartment {
//   deptId?: number
//   deptCode?: number
//   name?: string
//   description?: number
// }

// declare interface IUserRole {
//   userRoleId?: number
//   name?: string
//   description?: string
//   isActive?: boolean
//   permission?: string | TAny
//   status?: string
//   requestApprovalId?: number
//   author?: Buffer
//   accessLevel?: string
// }

// declare interface ITransactionReason {
//   reasonId?: string
//   category?: string
//   subCategory?: string
// }

// declare interface IDefaultUnit {
//   defaultId?: number
//   name?: string
//   value?: number
//   unit?: DefaultUnit
// }

// declare interface IEddMaintainable {
//   reasonId: number
//   actionType: CategoryAction
//   description
//   type: CategoryType
//   category: string
//   subCategory: string
// }
