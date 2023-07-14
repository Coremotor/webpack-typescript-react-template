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

export type TCompanyState = {
  activeTabKey: string;
  company: TCompany | null;
};

export enum ActiveNavTabKeyEnum {
  one = '1',
  two = '2',
  three = '3',
  four = '4',
}
