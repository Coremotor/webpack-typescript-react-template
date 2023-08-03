import React from 'react';
import { Row, Col } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';
import { usePaymentTransactionsColumnsWidth } from 'modules/payment-transactions/hooks/use-payment-transactions-columns-width';
import styles from './payment-transactions-list-header.module.css';

export const PaymentTransactionsListHeader = () => {
  const { t } = useTranslation();
  const { paymentTransactionsColumnsWidth } =
    usePaymentTransactionsColumnsWidth();
  return (
    <Row className={styles.row} wrap={false}>
      <Col className={styles.col} flex={paymentTransactionsColumnsWidth.date}>
        {t('Дата')}
      </Col>
      <Col
        className={styles.col}
        flex={paymentTransactionsColumnsWidth.orderNumber}
      >
        №{t('заказа')}
      </Col>
      <Col
        className={styles.col}
        flex={paymentTransactionsColumnsWidth.invoiceContract}
      >
        {t('Счет/договор')}
      </Col>
      <Col
        className={styles.col}
        flex={paymentTransactionsColumnsWidth.paymentMethod}
      >
        {t('Способ оплаты')}
      </Col>
      <Col
        className={styles.col}
        flex={paymentTransactionsColumnsWidth.typeStatus}
      >
        {t('Тип и статус операции')}
      </Col>
      <Col className={styles.col} flex={paymentTransactionsColumnsWidth.amount}>
        {t('Сумма')}
      </Col>
    </Row>
  );
};
