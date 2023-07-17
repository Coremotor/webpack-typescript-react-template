import React from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, Title } from 'modules/_shared/ui';
import { useCompanyTabs } from 'modules/company/hooks/use-company-tabs';
import styles from './company.module.css';

const Company = () => {
  const { t } = useTranslation();
  const { items, activeTabKey, onTabChange } = useCompanyTabs();

  return (
    <div className={styles.wrapper}>
      <Title level={3}>{t('company.title')}</Title>
      <Tabs
        onChange={onTabChange}
        activeKey={activeTabKey}
        items={items}
        destroyInactiveTabPane
      />
    </div>
  );
};

export default Company;
