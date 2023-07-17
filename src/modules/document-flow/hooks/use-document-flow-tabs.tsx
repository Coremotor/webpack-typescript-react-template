import React from 'react';
import type { TabsProps } from 'antd';
import { useTranslation } from 'react-i18next';
import AccountingDocuments from 'modules/document-flow/accounting-documents/accounting-documents';
import TransactionRegister from 'modules/document-flow/transaction-register/transaction-register';

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
