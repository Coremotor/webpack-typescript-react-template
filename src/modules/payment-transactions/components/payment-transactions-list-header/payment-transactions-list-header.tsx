import React from 'react';
import { Row, Col, Text } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';
import { usePaymentTransactionsColumnsWidth } from 'modules/payment-transactions/hooks/use-payment-transactions-columns-width';
import styles from './payment-transactions-list-header.module.css';

export const PaymentTransactionsListHeader = () => {
  const { t } = useTranslation();
  const { paymentTransactionsColumnsWidth } =
    usePaymentTransactionsColumnsWidth();
  return (
    <Row className={styles.row} wrap={false} gutter={10}>
      <Col className={styles.col} flex={paymentTransactionsColumnsWidth.date}>
        <Text ellipsis>{t('paymentTransactions.listHeader.date')}</Text>
      </Col>
      <Col
        className={styles.col}
        flex={paymentTransactionsColumnsWidth.orderNumber}
      >
        <Text ellipsis>{t('paymentTransactions.listHeader.order')}</Text>
      </Col>
      <Col
        className={styles.col}
        flex={paymentTransactionsColumnsWidth.invoiceContract}
      >
        <Text ellipsis>
          {t('paymentTransactions.listHeader.accountContract')}
        </Text>
      </Col>
      <Col
        className={styles.col}
        flex={paymentTransactionsColumnsWidth.paymentMethod}
      >
        <Text ellipsis>
          {t('paymentTransactions.listHeader.paymentMethod')}
        </Text>
      </Col>
      <Col
        className={styles.col}
        flex={paymentTransactionsColumnsWidth.typeStatus}
      >
        <Text ellipsis>{t('paymentTransactions.listHeader.typeStatus')}</Text>
      </Col>
      <Col className={styles.col} flex={paymentTransactionsColumnsWidth.amount}>
        <Text ellipsis>{t('paymentTransactions.listHeader.amount')}</Text>
      </Col>
    </Row>
  );
};
