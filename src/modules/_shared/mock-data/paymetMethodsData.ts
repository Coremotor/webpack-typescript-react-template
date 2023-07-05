import { TPaymentMethod } from 'modules/payment-methods/types';

export const paymentMethodsData: TPaymentMethod[] = [
  {
    title: 'Visa, MasterCard, МИР',
    paymentSystem: 'card',
    limit: {
      min: 1,
      max: null,
    },
    commission: 1.4,
    isActive: false,
  },
  {
    title: 'Visa, MasterCard, МИР',
    paymentSystem: 'card',
    limit: {
      min: 1,
      max: null,
    },
    commission: 1.4,
    isActive: true,
  },
  {
    title: 'Yandex Pay',
    paymentSystem: 'yandex',
    limit: {
      min: 1,
      max: 200000,
    },
    commission: 1.4,
    isActive: true,
  },
];
