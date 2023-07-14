import React from 'react';
import { setIsAuth } from 'modules/authorization/store/reduser';
import { useAppDispatch } from 'modules/_shared/store/hooks';
import { LocaleSwitcher } from 'modules/_shared/components';
import { Space, Button } from 'modules/_shared/ui';
import { CompanyNavigation } from 'modules/company/components';
import styles from './app-header.module.css';

export const AppHeader = () => {
  const dispatch = useAppDispatch();
  const logout = () => dispatch(setIsAuth(false));
  return (
    <Space className={styles.header}>
      <LocaleSwitcher />
      <CompanyNavigation />

      <Button className={styles.logout} onClick={logout}>
        Выйти
      </Button>
    </Space>
  );
};
