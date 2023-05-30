declare type TAddressDetails = {
  line1: string
  line2?: string
  line3?: string
  postCode: string
  town: string
  state: string
  country: string
}

declare type TContactDetails = {
  mobileNumber: string
  officeNumber: PhoneNumberType
  homeNumber: PhoneNumberType
  faxNumber: string
  email: string
}

declare type TEmploymentDetails = {
  monthlyHouseholdIncome?: string // PRS only
  occupation: string
  nameOfEmployer: string
  line1: string
  line2?: string
  line3?: string
  line4?: string
  postCode: string
  town: string
  state: string
  country: string
  natureOfBusiness: string
}

declare type TFatcaDetails = {
  classification: string
  confirmation: string
}

declare type TBankDetails = {
  name: string
  accountNo: string
}

declare type TClientDetails = {
  name: string
  salutation: string
  gender: string
  idNumber: string
  oldIdNumber: string
  passportExpiry: string
  dateOfBirth: string
  nationality: string
  placeOfBirth: string
  countryOfBirth: string
  race: string
  permanentAddress: TAddressDetails
  correspondenceAddress: TAddressDetails
  contactDetails: TContactDetails
  maritalStatus: string
  mothersMaidenName: string
  educationLevel: string
  employmentDetails?: TEmploymentDetails
  incomeGroup: string
  epfNumber?: string // epf ONLY
  fatca: TFatcaDetails
  bankDetails?: TBankDetails
}