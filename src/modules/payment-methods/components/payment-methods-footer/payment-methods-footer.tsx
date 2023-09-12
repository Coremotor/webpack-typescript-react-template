import React from 'react';
import { Space, Button } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';
import styles from './payment-methods-footer.module.css';

export const PaymentMethodsFooter = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <Space>
        <Button type='primary'>{t('paymentMethods.buttonSave')}</Button>
        <Button>{t('paymentMethods.buttonCancel')}</Button>
      </Space>
    </footer>
  );
};
