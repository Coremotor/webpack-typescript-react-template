import React from 'react';
import type { TabsProps } from 'antd';
import { useTranslation } from 'react-i18next';
import {
  CompanyEmployees,
  CompanyFounders,
  CompanyInfo,
  CompanyManagement,
} from 'modules/company/blocks';
import { useAppDispatch, useAppSelector } from 'modules/_shared/store/hooks';
import { getActiveTabKey } from 'modules/company/store/selectors';
import { setActiveTabKey } from 'modules/company/store/reduser';
import { ActiveNavTabKeyEnum } from 'modules/company/types';

export const useCompanyTabs = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const activeTabKey = useAppSelector(getActiveTabKey);
  const onTabChange = (key: string) => dispatch(setActiveTabKey(key));

  const items: TabsProps['items'] = [
    {
      key: ActiveNavTabKeyEnum.one,
      label: t('company.info'),
      children: <CompanyInfo />,
    },
    {
      key: ActiveNavTabKeyEnum.two,
      label: t('company.employees'),
      children: <CompanyEmployees />,
    },
    {
      key: ActiveNavTabKeyEnum.three,
      label: t('company.management'),
      children: <CompanyManagement />,
    },
    {
      key: ActiveNavTabKeyEnum.four,
      label: t('company.founders'),
      children: <CompanyFounders />,
    },
  ];

  return { items, activeTabKey, onTabChange };
};
