import React from 'react';
import type { TabsProps } from 'antd';
import { useTranslation } from 'react-i18next';
import {
  AccountingDocuments,
  TransactionRegister,
} from 'modules/document-flow/blocks';

export const useDocumentFlowTabs = () => {
  const { t } = useTranslation();
  const items: TabsProps['items'] = [
    {
      key: 'docsTab',
      label: t('documentFlow.docsTab'),
      children: <AccountingDocuments />,
    },
    {
      key: 'registryTab',
      label: t('documentFlow.registryTab'),
      children: <TransactionRegister />,
    },
  ];

  return { items };
};
