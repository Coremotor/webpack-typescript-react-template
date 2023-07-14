import type { TCompany } from 'modules/company/types';

export const companyData: TCompany = {
  id: 'company-id',
  name: 'ООО «Орбита Хотел»',
  address: '123592, г. Москва, ул. Кулакова, д.20, к.1',
  fullName: 'Общество с ограниченной ответственностью «Орбита Хотел»',
  inn: '526317984689',
  ogrn: '1234567898745',
  kpp: '770201001',
  okved: '55.10 Деятельность гостиниц и прочих мест для временного проживания',
  capitalType: 'Уставный',
  registered: '10 000 руб.',
  debt: 'Отсутствует',
  registrationDate: '6 июля 2018',
  registrationAuthority:
    'Межрайонная инспекция Федеральной налоговой службы №15 по Санкт-Петербургу',
  contacts: {
    mailingAddress: '123592, г. Москва, ул. Кулакова, д.20, к.1',
    phone: '+7 (902) 100-58-41',
    email: 'ElonMusk@gmail.com',
  },
};
