import { TFounder } from 'modules/company/types';

export const convertToBasicTab = (activeFounder: TFounder) => [
  {
    label: 'Учредитель',
    value: activeFounder.type,
  },
  {
    label: 'Резидент РФ',
    value: activeFounder ? 'shared.yes' : 'shared.no',
  },
  {
    label: 'Гражданство',
    value: activeFounder.citizenship,
  },
  {
    label: 'Доля в капитале',
    value: activeFounder.capitalPart,
  },
  {
    label: 'ИНН',
    value: activeFounder.inn,
  },
  {
    label: 'СНИЛС',
    value: activeFounder.snils,
  },
  {
    label: 'Дата рождения',
    value: activeFounder.birthday,
  },
  {
    label: 'Контактный телефон',
    value: activeFounder.phone,
  },
  {
    label: 'Место рождения',
    value: activeFounder.birthPlace,
  },
  {
    label: 'Адрес места жительства',
    value: activeFounder.address,
  },
  {
    label: 'Почтовый адрес',
    value: activeFounder.mailingAddress,
  },
];

export const convertToPassportTab = (activeFounder: TFounder) => [
  {
    label: 'Серия и номер',
    value: activeFounder.passportNumber,
  },
  {
    label: 'Дата выдачи',
    value: activeFounder.passportDate,
  },
  {
    label: 'Код подразделения',
    value: activeFounder.passportCode,
  },
  {
    label: 'Кем выдан',
    value: activeFounder.passportOrgan,
  },
];
