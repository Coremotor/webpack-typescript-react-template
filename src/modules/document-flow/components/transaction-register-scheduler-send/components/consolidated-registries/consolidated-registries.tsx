import React from 'react';
import { SendRecipients } from 'modules/document-flow/components/transaction-register-scheduler-send/components';
import { Text, Space } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';
import styles from './consolidated-registries.module.css';

export const ConsolidatedRegistries = () => {
  const { t } = useTranslation();

  return (
    <Space className={styles.wrapper} direction='vertical'>
      <SendRecipients />
      <Text strong type='secondary'>
        {t('documentFlow.consolidateShedulerDescription')}
      </Text>
    </Space>
  );
};
