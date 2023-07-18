import React from 'react';
import { Button, Space } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from 'modules/_shared/router/routes';
import {
  CompanyEmployeesList,
  CompanyEmployeesDetails,
} from 'modules/company/blocks/company-employees/components';
import styles from './company-employees.module.css';

export const CompanyEmployees = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToEditEmployee = () => navigate(RoutesEnum.employee);

  return (
    <Space className={styles.list} size='large' direction='vertical'>
      <Button onClick={goToEditEmployee} type='primary'>
        {t('companyEmployees.addEmployeeButton')}
      </Button>
      <CompanyEmployeesList />
      <CompanyEmployeesDetails />
    </Space>
  );
};
