declare interface TransactionReportInfo extends IAgent, IBranch, IClientAssessment, 
  IRecommendation, IClient, IUTAccount, IInvestment, IPayment, IPaymentInfo {
  productType?: string // fundType from IRecommendation

  // from IAgent
  registrationDate?: string
  servicingAdviserCode?: string
  servicingAdviserName?: string

  // from IBranch
  branchName?: string

  // orderNo+transactionRef from IInvestment
  omniRef?: string

  jointName: string

  // prs
  allocationType: string
}

declare interface DsXlsxData {
  type: string[]
  branchName: string
  time: string
  submissions: IAny[]
  followUpDocuments: IAny[]
  preparedBy: {
    name: string
    department: string
    branch: string
  }
}

declare type TXlsxData = {
  sheetName: string
  reportData: IAny
}

declare interface TZipData {
  name: string
  buffer: Buffer
}

declare interface TxInfo extends TxAccount {
  fundId: number
  clientId: Buffer
  jointId: Buffer
  clientName: string
  clientIdNum: string
  jointName: string
  jointIdNum: string
  orderNo: string
  transactionRef: string
}

declare interface TxSummary extends TxInfo, TxPersonalDetails {}
declare interface ClientProfile extends TxPersonalDetails, TxAddress, TxContact, TxEmployment, TxDeclaration, TxBank {}

declare interface TxAccount extends TransactionReportInfo {
  registrationDate: string
  agentCode: string
  agentName: string
  fundType: string
  prsType: string
  assetAllocation: string
  accountType: string
  riskProfile: string
  branchName: string
  signatory: string
  incomeDistribution: string
  investmentType: string
}

declare interface TxPersonalDetails extends TxInfo {
  placeOfBirth: string
  countryOfBirth: string
  expirationDate: string // need format

  salutation: string
  gender: string
  nationality: string
  bumiputera: string // ??
  race: string
  mothersMaidenName: string
  educationLevel: string
  maritalStatus: string
  epfMemberNumber: string
  epfAccountType: string

  relationship?: string
}

declare interface TxAddress {
  address: SubAddress
  postCode: string
  city: string
  state: string
  country: string
}

type SubAddress = {
  line1: string
  line2: string
  line3: string
}

declare interface TxContact {
  contactNumber: ContactNumber
  emailAddress: string
}

type ContactNumber = {
  mobileNumber: ContactCodeValue
  homeNumber: ContactCodeValue
  faxNumber: ContactCodeValue
  officeNumber: ContactCodeValue
}

type ContactCodeValue = {
  code: string
  value: string
}

declare interface TxEmployment extends TxAddress {
  occupation: string
  businessNature: string
  employerName: string
  monthlyHouseholdIncome: string
  grossIncome?: string
}

declare interface TxDeclaration {
  fatca: FatcaDeclaration
  crs: CrsDeclaration
  fea: FeaDeclaration
}

type FatcaDeclaration = {
  usCitizen: boolean
  usBorn: boolean
}

type CrsDeclaration = {
  taxResident: string
  tin: SubTin[]
}

type SubTin = {
  country: string
  tinNumber: string
  reason: string
}

type FeaDeclaration = {
  feaTagged: string
}

declare interface TxBank {
  localBank: BankDetails
  foreignBank: BankDetails
}

type BankDetails = {
  currency: string[]
  bankAccountName: string
  bankAccountNumber: string
  bankName: string
  bankSwiftCode: string
  bankLocation?: string
}
