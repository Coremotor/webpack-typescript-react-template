import React from 'react';
import logo from 'assets/images/logo.png';
import { Text, Title, Space } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { RoutesEnum } from 'modules/_shared/router/routes';
import styles from './registration-header.module.css';

export const RegistrationHeader = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.container}>
      <img className={styles.logo} src={logo} alt='Comfort booking' />
      <Title level={3}>{t('registration.title')}</Title>
      <Space classNames={styles.linkWrapper} className={styles.linkWrapper}>
        <Text>{t('registration.isHaveAccount')}</Text>
        <Link to={RoutesEnum.Authorization}>{t('registration.link')}</Link>
      </Space>
    </header>
  );
};
