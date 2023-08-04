import React from 'react';
import logo from 'assets/images/logo.png';
import { Space, Text, Title } from 'modules/_shared/ui';
import { Link } from 'react-router-dom';
import { RoutesEnum } from 'modules/_shared/router/routes';
import { useTranslation } from 'react-i18next';
import styles from './authorization-header.module.css';

export const AuthorizationHeader = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.container}>
      <img className={styles.logo} src={logo} alt='Comfort booking' />
      <Title level={3}>{t('authorization.title')}</Title>
      <Space>
        <Text strong>{t('authorization.isHaveAccount')}</Text>
        <Link className={styles.link} to={RoutesEnum.Registration}>
          {t('authorization.link')}
        </Link>
      </Space>
    </header>
  );
};
