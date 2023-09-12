import { TManager } from 'modules/company/types';

export const convertToBasicTab = (activeManager: TManager) => [
  {
    label: 'forms.labels.resident',
    value: activeManager ? 'shared.yes' : 'shared.no',
  },
  {
    label: 'forms.labels.citizenship',
    value: activeManager.citizenship,
  },
  {
    label: 'forms.labels.documents',
    value: activeManager.act,
  },
  {
    label: 'forms.labels.signingDocumentsFullName',
    value: activeManager.fullNameForDocs,
  },
  {
    label: 'forms.labels.inn',
    value: activeManager.inn,
  },
  {
    label: 'forms.labels.snils',
    value: activeManager.snils,
  },
  {
    label: 'forms.labels.birthday',
    value: activeManager.birthday,
  },
  {
    label: 'forms.labels.phone',
    value: activeManager.phone,
  },
  {
    label: 'forms.labels.birthPlace',
    value: activeManager.birthPlace,
  },
  {
    label: 'forms.labels.address',
    value: activeManager.address,
  },
  {
    label: 'forms.labels.mailingAddress',
    value: activeManager.mailingAddress,
  },
];

export const convertToPassportTab = (activeManager: TManager) => [
  {
    label: 'forms.labels.passportSeries',
    value: activeManager.passportSeries,
  },
  {
    label: 'forms.labels.passportNumber',
    value: activeManager.passportNumber,
  },
  {
    label: 'forms.labels.passportDate',
    value: activeManager.passportDate,
  },
  {
    label: 'forms.labels.passportCode',
    value: activeManager.passportCode,
  },
  {
    label: 'forms.labels.passportOrgan',
    value: activeManager.passportOrgan,
  },
];
