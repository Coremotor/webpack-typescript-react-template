import React from 'react';
import type { TabsProps } from 'antd';
import { useTranslation } from 'react-i18next';
import { ConsolidatedRegistries } from 'modules/document-flow/components/transaction-register-scheduler-send/components/consolidated-registries/consolidated-registries';
import { DailyRegisters } from 'modules/document-flow/components/transaction-register-scheduler-send/components/daily-registers/daily-registers';

export const useShedulerSendTabs = () => {
  const { t } = useTranslation();
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: t('documentFlow.consolidatedRegistries'),
      children: <ConsolidatedRegistries />,
    },
    {
      key: '2',
      label: t('documentFlow.dailyRegisters'),
      children: <DailyRegisters />,
    },
  ];

  return { items };
};
