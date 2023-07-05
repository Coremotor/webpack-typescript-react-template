import React from 'react';
import { Title, Space, Row, Col } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';
import {
  PaymentMethodsAlert,
  PaymentMethodsFooter,
  PaymentMethodsList,
} from 'modules/payment-methods/components';
import styles from './payment-methods.module.css';

export const PaymentMethods = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.wrapper}>
        <Title level={3}>{t('paymentMethods.title')}</Title>
        <Row>
          <Col md={24} lg={18} xl={16} xxl={14}>
            <Space size='large' direction='vertical'>
              <PaymentMethodsAlert />
              <PaymentMethodsList />
            </Space>
          </Col>
        </Row>
      </div>
      <PaymentMethodsFooter />
    </>
  );
};

export default PaymentMethods;
