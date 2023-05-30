// DASHBOARD
type BankDashboard = {
  bankAccountName: string
  bankAccountNumber: string
  bankName: string
  bankSwiftCode: string
  bankLocation?: string
  currency: string[]
}
type CRSDashboard = {
  taxResident: string
  tin: TinDashboard[]
}
type TinDashboard = {
  country: string
  tinNumber: string
  noTin: boolean
  reason?: string
}
type EmploymentDashboard = {
  annualIncome: string
  monthlyHouseholdIncome: string
  nameOfEmployer: string
  natureOfBusiness: string
  occupation: string
  address: AddressDetails
}
type AddressDetails = {
  address: string
  city: string
  country: string
  postCode: string
  state: string
}
type ContactDetails = {
  email: string
  homeNumber: PhoneNumberType
  mobileNumber: PhoneNumberType
  officeNumber: PhoneNumberType
  faxNumber: string
}

type PhoneNumberType = {
  mobileCode: string
  number: string
}

type EpfDetailsDashboard = {
  epfNumber: string
  epfType: string
}

type FATCADetailsDashboard = {
  fileUrl?: string
  noCertificate?: boolean
  usBorn: boolean
  usPerson: boolean
  malaysiaResident?: boolean
  reason?: string
}
type FEADashboard = {
  malaysiaResident: boolean
  domesticRinggitBorrowing: boolean
  remainingBalance: number
}

declare interface IClientProfile {
  name: string
  dateOfBirth: string
  idNumber: string
  documentType: string
  salutation: string
  gender: string
  nationality: string
  bumiputera: boolean
  race: string
  risk: string
  placeOfBirth: string
  countryOfBirth: string
  mothersMaidenName: string
  maritalStatus: string
  educationLevel: string
  accountType: string
  operatingMode: string
  relationshipToJoint: string
  viewAccess: string
  registerDate: number
  permanentAddress: AddressDetails
  mailingAddress: AddressDetails
  contactDetails: ContactDetails
  epfDetails?: EpfDetailsDashboard
  employmentDetails: EmploymentDashboard
  localBank: BankDashboard[]
  foreignBank: BankDashboard[]
  fatca: FATCADetailsDashboard
  crs: CRSDashboard
  fea: FEADashboard
}
