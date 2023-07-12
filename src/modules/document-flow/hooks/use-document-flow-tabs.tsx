import React from 'react';
import type { TabsProps } from 'antd';
import { useTranslation } from 'react-i18next';
import {
  TransactionRegister,
  AccountingDocuments,
} from 'modules/document-flow/tabs';

export const useDocumentFlowTabs = () => {
  const { t } = useTranslation();
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: t('documentFlow.docsTab'),
      children: <AccountingDocuments />,
    },
    {
      key: '2',
      label: t('documentFlow.registryTab'),
      children: <TransactionRegister />,
    },
  ];

  return { items };
};
