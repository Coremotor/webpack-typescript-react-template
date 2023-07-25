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
  description: string;
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
};

export enum ActiveNavTabKeyEnum {
  one = '1',
  two = '2',
  three = '3',
  four = '4',
}

export type TEmployeeFormFields = {
  fullName: string;
  position: string;
  email: string;
  phone: string;
  access: string;
  available: string;
};
