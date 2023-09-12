import { TAccountingDocument } from 'modules/document-flow/types';

export const accountingDocumentsData: TAccountingDocument[] = [
  {
    id: '1',
    date: 'Апрель 2023',
    docs: [
      {
        id: '1',
        acquirer: 'alfa',
        act: 'Акт КБ-12345',
        report: 'Отчёт агента',
        invoice: 'Счёт фактура 123123-23413',
      },
      {
        id: '2',
        acquirer: 'moneta',
        act: 'Акт КБ-12344',
        report: 'Отчёт агента',
        invoice: 'Счёт фактура 123123-23412',
      },
      {
        id: '3',
        acquirer: 'moneta',
        act: 'Акт платёжной системы',
        report: 'Реестр платёжной системы',
        invoice: '',
      },
    ],
  },
  {
    id: '2',
    date: 'Март 2023',
    docs: [
      {
        id: '1',
        acquirer: 'alfa',
        act: 'Акт КБ-12312',
        report: 'Отчёт агента',
        invoice: 'Счёт фактура 123123-23411',
      },
      {
        id: '2',
        acquirer: 'moneta',
        act: 'Акт КБ-12333',
        report: 'Отчёт агента',
        invoice: 'Счёт фактура 123123-23410',
      },
      {
        id: '3',
        acquirer: 'moneta',
        act: 'Акт платёжной системы',
        report: 'Реестр платёжной системы',
        invoice: '',
      },
    ],
  },
  {
    id: '3',
    date: 'Февраль 2023',
    docs: [
      {
        id: '1',
        acquirer: 'alfa',
        act: 'Акт КБ-12312',
        report: 'Отчёт агента',
        invoice: 'Счёт фактура 123123-23409',
      },
    ],
  },
];
