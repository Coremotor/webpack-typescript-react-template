import React from 'react';
import styles from './authorization-header.module.css';
import logo from 'assets/images/logo.png';
import { Space, Text, Title } from 'modules/_shared/ui';
import { Link } from 'react-router-dom';
import { RoutesEnum } from 'modules/_shared/router/routes';
import { useTranslation } from 'react-i18next';

export const AuthorizationHeader = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.container}>
      <img className={styles.logo} src={logo} alt='Comfort booking' />
      <Title level={3}>{t('authorization.title')}</Title>
      <Space classNames={styles.linkWrapper} className={styles.linkWrapper}>
        <Text>{t('authorization.isHaveAccount')}</Text>
        <Link to={RoutesEnum.registration}>{t('authorization.link')}</Link>
      </Space>
    </header>
  );
};
