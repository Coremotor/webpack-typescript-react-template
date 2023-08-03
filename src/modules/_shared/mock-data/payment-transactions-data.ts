import { TPaymentTransaction } from 'modules/payment-transactions/types';

export const paymentTransactionsData: TPaymentTransaction[] = [
  {
    id: '1',
    date: '11 июля 2022',
    orderNumber: '#6248-189163868/Hampton by Hilton Moscow Strogino',
    invoiceContract: '*000600/5387115684',
    paymentMethod: 'Карта',
    typeStatus: {
      text: 'Оплата',
      status: 'done',
    },
    amount: 10000,
  },
  {
    id: '2',
    date: '11 июля 2022',
    orderNumber: '#6248-189163868/Hampton by Hilton Moscow Strogino',
    invoiceContract: '*000600/5387115684',
    paymentMethod: 'Карта',
    typeStatus: {
      text: 'Оплата: отмена',
      status: 'cancel',
    },
    amount: 9000,
  },
  {
    id: '3',
    date: '11 июля 2022',
    orderNumber: '#6248-189163868/Hampton by Hilton Moscow Strogino',
    invoiceContract: '*000600/5387115684',
    paymentMethod: 'Карта',
    typeStatus: {
      text: 'Возврат: в обработке',
      status: 'pending',
    },
    amount: -5000,
  },
  {
    id: '4',
    date: '11 июля 2022',
    orderNumber: '#6248-189163868/Hampton by Hilton Moscow Strogino',
    invoiceContract: '*000600/5387115684',
    paymentMethod: 'Карта',
    typeStatus: {
      text: 'Резерв средств',
      status: 'reserve',
    },
    amount: -3000,
  },
  {
    id: '5',
    date: '11 июля 2022',
    orderNumber: '#6248-189163868/Hampton by Hilton Moscow Strogino',
    invoiceContract: '*000600/5387115684',
    paymentMethod: 'Карта',
    typeStatus: {
      text: 'Перечисление',
      status: 'other',
    },
    amount: -1000,
  },
];
