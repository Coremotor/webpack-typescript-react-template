import React from 'react';
import { useTranslation } from 'react-i18next';
import { Title, Tabs } from 'modules/_shared/ui';
import { useTabs } from 'modules/document-flow/hooks/use-tabs';
import styles from './document-flow.module.css';

export const DocumentFlow = () => {
  const { t } = useTranslation();
  const { items } = useTabs();
  return (
    <div className={styles.container}>
      <Title level={3}>{t('documentFlow.title')}</Title>
      <Tabs
        defaultActiveKey={items[1].key}
        items={items}
        destroyInactiveTabPane
      />
    </div>
  );
};

export default DocumentFlow;
