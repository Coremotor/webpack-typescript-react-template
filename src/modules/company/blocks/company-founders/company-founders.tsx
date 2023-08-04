import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from 'modules/_shared/router/routes';
import { Button, Space } from 'modules/_shared/ui';
import {
  CompanyFoundersList,
  CompanyFoundersDetails,
} from 'modules/company/blocks/company-founders/components';
import styles from './company-founders.module.css';

export const CompanyFounders = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToFounderPage = () => navigate(RoutesEnum.Founder);
  return (
    <Space className={styles.list} size='large' direction='vertical'>
      <Button onClick={goToFounderPage} type='primary'>
        {t('companyFounders.addFounderButton')}
      </Button>
      <CompanyFoundersList />
      <CompanyFoundersDetails />
    </Space>
  );
};
