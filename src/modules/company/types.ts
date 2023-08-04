export type TContacts = {
  mailingAddress: string;
  phone: string;
  email: string;
};

export type TCompany = {
  id: string;
  name: string;
  address: string;
  fullName: string;
  inn: string;
  ogrn: string;
  kpp: string;
  okved: string;
  capitalType: string;
  registered: string;
  debt: string;
  registrationDate: string;
  registrationAuthority: string;
  contacts: TContacts;
};

export type TEmployee = {
  id: string;
  fullName: string;
  description: string;
  email: string;
  status: {
    title: string;
    value: string;
  };
  accessLevel: string;
  phone: string;
};

export type TManager = {
  id: string;
  fullName: string;
  fullNameForDocs: string;
  position: string;
  isRussiaResident: boolean;
  citizenship: string;
  phone: string;
  act: string;
  inn: string;
  snils: string;
  birthday: string;
  birthPlace: string;
  address: string;
  mailingAddress: string;
  isMailingAddressEqualsAddress: boolean;
  passportSeries: string;
  passportNumber: string;
  passportDate: string;
  passportCode: string;
  passportOrgan: string;
};

export type TFounder = {
  id: string;
  type: string;
  isRussiaResident: boolean;
  fullName: string;
  position: string;
  citizenship: string;
  capitalPart: string;
  inn: string;
  snils: string;
  birthday: string;
  phone: string;
  birthPlace: string;
  address: string;
  mailingAddress: string;
  isMailingAddressEqualsAddress: boolean;
  passportSeries: string;
  passportNumber: string;
  passportDate: string;
  passportCode: string;
  passportOrgan: string;
};

export type TCompanyState = {
  activeTabKey: string;
  company: TCompany | null;
  employee: TEmployee | null;
  employees: TEmployee[];
  activeEmployee: TEmployee | null;
  manager: TManager | null;
  managers: TManager[];
  activeManager: TManager | null;
  founder: TFounder | null;
  founders: TFounder[];
  activeFounder: TFounder | null;
};

export enum ActiveNavTabKeyEnum {
  CompanyInfo = 'company-info',
  CompanyEmployees = 'company-employees',
  CompanyManagement = 'company-management',
  CompanyFounders = 'company-founders',
}

export type TEmployeeFormFields = {
  fullName: string;
  position: string;
  email: string;
  phone: string;
  access: string;
  available: string;
};

export type TManagerFormFields = {
  fullName: string;
  fullNameForDocs: string;
  position: string;
  isRussiaResident: boolean;
  citizenship: string;
  phone: string;
  act: string;
  inn: string;
  snils: string;
  birthday: string;
  birthPlace: string;
  address: string;
  mailingAddress: string;
  isMailingAddressEqualsAddress: boolean;
  passportSeries: string;
  passportNumber: string;
  passportDate: string;
  passportCode: string;
  passportOrgan: string;
};

export type TFounderFormFields = {
  type: string;
  isRussiaResident: boolean;
  fullName: string;
  citizenship: string;
  capitalPart: string;
  inn: string;
  snils: string;
  birthday: string;
  phone: string;
  birthPlace: string;
  address: string;
  isMailingAddressEqualsAddress: boolean;
  passportSeries: string;
  passportNumber: string;
  passportDate: string;
  passportCode: string;
  passportOrgan: string;
};
