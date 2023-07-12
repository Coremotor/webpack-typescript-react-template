import React, { FC } from 'react';
import { TPaymentMethod } from 'modules/payment-methods/types';
import { Row, Col, Switch, Text, Space } from 'modules/_shared/ui';
import { PaymentMethodsIcon } from 'modules/payment-methods/components/payment-methods-icon/payment-methods-icon';
import { useTranslation } from 'react-i18next';
import { formatCurrency } from 'modules/_shared/i18n/format-currency';
import styles from './payment-methods-list-item.module.css';

type TPaymentMethodsListItemProps = {
  item: TPaymentMethod;
};

export const PaymentMethodsListItem: FC<TPaymentMethodsListItemProps> = ({
  item,
}) => {
  const { t } = useTranslation();

  return (
    <Row wrap={false} className={styles.row}>
      <Col className={styles.col} flex='60px'>
        <PaymentMethodsIcon paymentSystem={item.paymentSystem} />
      </Col>
      <Col className={styles.col} flex='auto'>
        <Space.Compact direction='vertical'>
          <Text strong>{item.title}</Text>
          <Text strong type='secondary'>
            {t('paymentMethods.paymentMethodDescription')}:
            {item.limit.min && ` от ${formatCurrency(item.limit.min)}`}
            {item.limit.max && ` до ${formatCurrency(item.limit.max)}`}
          </Text>
        </Space.Compact>
      </Col>
      <Col className={styles.col} flex='15%'>
        {item.commission} %
      </Col>
      <Col className={styles.col} flex='15%'>
        <Switch className={styles.switch} defaultChecked={item.isActive} />
      </Col>
    </Row>
  );
};
