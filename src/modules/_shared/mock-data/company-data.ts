import type { TCompany, TEmployee } from 'modules/company/types';

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

export const availableObjectOptions = [
  { value: 'id_1', label: 'Hampton by Hilton Moscow Strogino' },
  { value: 'id_2', label: 'Hotel Plaza Garden Moscow' },
  { value: 'id_3', label: 'Novotel Москва Сити 4*' },
  { value: 'id_4', label: 'Aparthotel Adagio Moscow Kievskaya' },
];

export const accessLevelOptions = [
  { value: 'id_1', label: 'Админ' },
  { value: 'id_2', label: 'Сотрудник' },
  { value: 'id_3', label: 'Бухгалтер' },
];

export const employeesData: TEmployee[] = [
  {
    id: 'employee_id_1',
    fullName: 'Админ',
    description: 'Администратор системы',
    email: 'ElonMusk@gmail.com',
    status: {
      title: 'Последний логин',
      value: '19 марта 2023',
    },
    accessLevel: 'Полный доступ',
  },
  {
    id: 'employee_id_2',
    fullName: 'Константинов Константин Константинович',
    description: 'Стажёр',
    email: 'konstantin@mail.ru',
    status: {
      title: 'Последний логин',
      value: '19 марта 2023',
    },
    accessLevel: 'Бухгалтер',
  },
  {
    id: 'employee_id_3',
    fullName: 'Петрова Лариса Ивановна',
    description: 'Организатор мероприятий',
    email: 'petrova@mail.ru',
    status: {
      title: 'Последний логин',
      value: '19 марта 2023',
    },
    accessLevel: 'Сотрудник',
  },
];
