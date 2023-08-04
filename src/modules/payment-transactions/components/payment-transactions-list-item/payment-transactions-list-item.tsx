import React, { FC } from 'react';
import { Row, Col, Text } from 'modules/_shared/ui';
import { usePaymentTransactionsColumnsWidth } from 'modules/payment-transactions/hooks/use-payment-transactions-columns-width';
import { TPaymentTransaction } from 'modules/payment-transactions/types';
import { formatCurrency } from 'modules/_shared/helpers/format-currency';
import { PaymentTransactionsTypeStatusTag } from 'modules/payment-transactions/components/payment-transactions-type-status-tag/payment-transactions-type-status-tag';
import classNames from 'classnames';
import styles from './payment-transactions-list-item.module.css';
import { PaymentTransactionsPaymentMethod } from 'modules/payment-transactions/components/payment-transactions-payment-method/payment-transactions-payment-method';

type TPaymentTransactionsListItemProps = {
  transaction: TPaymentTransaction;
};

export const PaymentTransactionsListItem: FC<
  TPaymentTransactionsListItemProps
> = ({ transaction }) => {
  const { paymentTransactionsColumnsWidth } =
    usePaymentTransactionsColumnsWidth();
  return (
    <Row className={styles.row} wrap={false} gutter={10}>
      <Col className={styles.col} flex={paymentTransactionsColumnsWidth.date}>
        <Text ellipsis>{transaction.date}</Text>
      </Col>
      <Col
        className={styles.col}
        flex={paymentTransactionsColumnsWidth.orderNumber}
      >
        <Text ellipsis>{transaction.orderNumber}</Text>
      </Col>
      <Col
        className={styles.col}
        flex={paymentTransactionsColumnsWidth.invoiceContract}
      >
        <Text ellipsis>{transaction.invoiceContract}</Text>
      </Col>
      <Col
        className={styles.col}
        flex={paymentTransactionsColumnsWidth.paymentMethod}
      >
        <PaymentTransactionsPaymentMethod transaction={transaction} />
      </Col>
      <Col
        className={styles.col}
        flex={paymentTransactionsColumnsWidth.typeStatus}
      >
        <PaymentTransactionsTypeStatusTag transaction={transaction} />
      </Col>
      <Col className={styles.col} flex={paymentTransactionsColumnsWidth.amount}>
        <Text
          className={classNames({
            [styles.red]: transaction.typeStatus.status === 'cancel',
          })}
          ellipsis
        >
          {formatCurrency(transaction.amount)}
        </Text>
      </Col>
    </Row>
  );
};
