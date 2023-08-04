import React from 'react';
import type { TabsProps } from 'antd';
import { useTranslation } from 'react-i18next';
import {
  ConsolidatedRegistries,
  DailyRegisters,
} from 'modules/document-flow/blocks/transaction-register-scheduler-send/components';

export const useShedulerSendTabs = () => {
  const { t } = useTranslation();
  const items: TabsProps['items'] = [
    {
      key: 'consolidatedRegistries',
      label: t('documentFlow.consolidatedRegistries'),
      children: <ConsolidatedRegistries />,
    },
    {
      key: 'dailyRegisters',
      label: t('documentFlow.dailyRegisters'),
      children: <DailyRegisters />,
    },
  ];

  return { items };
};
