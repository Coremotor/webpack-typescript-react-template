export type TPaymentSystem = 'card' | 'yandex';
export type TPaymentMethod = {
  title: string;
  paymentSystem: TPaymentSystem;
  limit: {
    min: number | null;
    max: number | null;
  };
  commission: number;
  isActive: boolean;
};
export type TPaymentMethodsState = {
  paymentMethods: TPaymentMethod[];
};
