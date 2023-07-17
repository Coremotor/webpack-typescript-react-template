import React from 'react';
import { Text, Space } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';
import { SendRecipients } from 'modules/document-flow/transaction-register-scheduler-send/components/send-recipients/send-recipients';
import styles from './daily-registers.module.css';

export const DailyRegisters = () => {
  const { t } = useTranslation();
  return (
    <Space className={styles.wrapper} direction='vertical'>
      <SendRecipients />
      <Text strong type='secondary'>
        {t('documentFlow.dailyShedulerDescription')}
      </Text>
    </Space>
  );
};
