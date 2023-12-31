import React from 'react';
import { useTranslation } from 'react-i18next';
import { Title, Tabs } from 'modules/_shared/ui';
import { useDocumentFlowTabs } from 'modules/document-flow/hooks/use-document-flow-tabs';
import styles from './document-flow.module.css';

export const DocumentFlow = () => {
  const { t } = useTranslation();
  const { items } = useDocumentFlowTabs();
  return (
    <div className={styles.container}>
      <Title level={3}>{t('documentFlow.title')}</Title>
      <Tabs
        defaultActiveKey={items[0].key}
        items={items}
        destroyInactiveTabPane
      />
    </div>
  );
};

export default DocumentFlow;
