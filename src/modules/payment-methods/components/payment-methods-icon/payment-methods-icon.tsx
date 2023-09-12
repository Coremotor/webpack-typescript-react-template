import React, { FC } from 'react';
import CardIcon from 'assets/icons/round-card.svg';
import YandexIcon from 'assets/icons/yandex.svg';
import { TPaymentSystem } from 'modules/payment-methods/types';

type TPaymentMethodsIconProps = {
  paymentSystem: TPaymentSystem;
};

export const PaymentMethodsIcon: FC<TPaymentMethodsIconProps> = ({
  paymentSystem,
}) => {
  const Icon = () => {
    switch (paymentSystem) {
      case 'card':
        return <CardIcon />;
      case 'yandex':
        return <YandexIcon />;
      default:
        return <div>Icon</div>;
    }
  };

  return <Icon />;
};
