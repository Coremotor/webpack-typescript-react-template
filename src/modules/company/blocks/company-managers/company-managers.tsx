import React from 'react';
import { Button, Space } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from 'modules/_shared/router/routes';
import {
  CompanyManagersDetails,
  CompanyManagersList,
} from 'modules/company/blocks/company-managers/components';
import styles from './company-managers.module.css';

export const CompanyManagers = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToManagerPage = () => navigate(RoutesEnum.manager);

  return (
    <Space className={styles.list} size='large' direction='vertical'>
      <Button onClick={goToManagerPage} type='primary'>
        {t('Добавить руководителя')}
      </Button>
      <CompanyManagersList />
      <CompanyManagersDetails />
    </Space>
  );
};
