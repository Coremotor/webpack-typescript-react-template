import { TFounder } from 'modules/company/types';

export const convertToBasicTab = (activeFounder: TFounder) => [
  {
    label: 'companyFounders.founder',
    value: activeFounder.type,
  },
  {
    label: 'forms.labels.resident',
    value: activeFounder ? 'shared.yes' : 'shared.no',
  },
  {
    label: 'forms.labels.citizenship',
    value: activeFounder.citizenship,
  },
  {
    label: 'forms.labels.capital',
    value: activeFounder.capitalPart,
  },
  {
    label: 'forms.labels.inn',
    value: activeFounder.inn,
  },
  {
    label: 'forms.labels.snils',
    value: activeFounder.snils,
  },
  {
    label: 'forms.labels.birthday',
    value: activeFounder.birthday,
  },
  {
    label: 'forms.labels.phone',
    value: activeFounder.phone,
  },
  {
    label: 'forms.labels.birthPlace',
    value: activeFounder.birthPlace,
  },
  {
    label: 'forms.labels.address',
    value: activeFounder.address,
  },
  {
    label: 'forms.labels.mailingAddress',
    value: activeFounder.mailingAddress,
  },
];

export const convertToPassportTab = (activeFounder: TFounder) => [
  {
    label: 'forms.labels.passportSeries',
    value: activeFounder.passportSeries,
  },
  {
    label: 'forms.labels.passportNumber',
    value: activeFounder.passportNumber,
  },
  {
    label: 'forms.labels.passportDate',
    value: activeFounder.passportDate,
  },
  {
    label: 'forms.labels.passportCode',
    value: activeFounder.passportCode,
  },
  {
    label: 'forms.labels.passportOrgan',
    value: activeFounder.passportOrgan,
  },
];
