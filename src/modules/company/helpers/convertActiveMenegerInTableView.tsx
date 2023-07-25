import { TManager } from 'modules/company/types';

export const convertToBasicTab = (activeManager: TManager) => [
  {
    label: 'Резидент РФ',
    value: activeManager ? 'shared.yes' : 'shared.no',
  },
  {
    label: 'Гражданство',
    value: activeManager.citizenship,
  },
  {
    label: 'Действует на основании',
    value: activeManager.act,
  },
  {
    label: 'ФИО для подписи в документах',
    value: activeManager.fullName,
  },
  {
    label: 'ИНН',
    value: activeManager.inn,
  },
  {
    label: 'СНИЛС',
    value: activeManager.snils,
  },
  {
    label: 'Дата рождения',
    value: activeManager.birthday,
  },
  {
    label: 'Контактный телефон',
    value: activeManager.phone,
  },
  {
    label: 'Место рождения',
    value: activeManager.birthPlace,
  },
  {
    label: 'Адрес места жительства',
    value: activeManager.address,
  },
  {
    label: 'Почтовый адрес',
    value: activeManager.mailingAddress,
  },
];

export const convertToPassportTab = (activeManager: TManager) => [
  {
    label: 'Серия и номер',
    value: activeManager.passportNumber,
  },
  {
    label: 'Дата выдачи',
    value: activeManager.passportDate,
  },
  {
    label: 'Код подразделения',
    value: activeManager.passportCode,
  },
  {
    label: 'Кем выдан',
    value: activeManager.passportOrgan,
  },
];
