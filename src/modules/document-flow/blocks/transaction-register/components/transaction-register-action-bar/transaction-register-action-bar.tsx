import React from 'react';
import { Button, Card, Space, Text } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'modules/_shared/root-store/hooks';
import { getSelectedTransactionRegisters } from 'modules/document-flow/store/selectors';
import styles from './transaction-register-action-bar.module.css';

export const TransactionRegisterActionBar = () => {
  const { t } = useTranslation();
  const selectedRegisters = useAppSelector(getSelectedTransactionRegisters);

  return (
    <Card className={styles.card} bordered={false}>
      <Space size='large'>
        <Text>
          {t('documentFlow.actionBarText')}: {selectedRegisters.length}
        </Text>

        <Button>{t('documentFlow.downloadButton')}</Button>
      </Space>
    </Card>
  );
};
