import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, Title } from 'modules/_shared/ui';
import { useCompanyTabs } from 'modules/company/hooks/use-company-tabs';
import { setCompany } from 'modules/company/store/reduser';
import { companyData } from 'modules/_shared/mock-data/company-data';
import { useAppDispatch } from 'modules/_shared/store/hooks';
import styles from './company.module.css';

export const Company = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { items, activeTabKey, onTabChange } = useCompanyTabs();

  useEffect(() => {
    console.log('Load company DTO');
    dispatch(setCompany(companyData));
  }, []);

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
