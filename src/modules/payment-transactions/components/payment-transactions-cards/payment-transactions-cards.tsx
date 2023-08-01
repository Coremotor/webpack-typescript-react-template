import React from 'react';
import styles from './payment-transactions-cards.module.css';
import { PaymentTransactionsCard } from 'modules/payment-transactions/components';

const cards: {
  id: string;
  type: 'blue' | 'green' | 'orange';
  title: string;
  amount: number;
}[] = [
  {
    id: '1',
    type: 'blue',
    title: 'Общий баланс',
    amount: 15000,
  },
  {
    id: '2',
    type: 'orange',
    title: 'Резерв средств для кешбэка',
    amount: 1000,
  },
  {
    id: '3',
    type: 'green',
    title: 'Доступный остаток',
    amount: 14000,
  },
];

export const PaymentTransactionsCards = () => {
  return (
    <div className={styles.container}>
      {cards.map((card) => (
        <PaymentTransactionsCard
          key={card.id}
          type={card.type}
          title={card.title}
          amount={card.amount}
        />
      ))}
    </div>
  );
};
