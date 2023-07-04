import React from 'react';
import styles from './email-confirmation-header.module.css';
import logo from 'assets/images/logo.png';
import { Text, Title, Space } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getEmailForConfirm } from 'modules/registration/store/selectors';

export const EmailConfirmationHeader = () => {
  const { t } = useTranslation();
  const email = useSelector(getEmailForConfirm);

  return (
    <header className={styles.container}>
      <img className={styles.logo} src={logo} alt='Comfort booking' />
      <Title level={3}>{t('emailConfirmation.title')}</Title>
      <Space.Compact direction='vertical'>
        <Text strong type='secondary'>
          {t('emailConfirmation.content')}
        </Text>
        <Text strong>{email || 'email@example.com'}</Text>
      </Space.Compact>
    </header>
  );
};