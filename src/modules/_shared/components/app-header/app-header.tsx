import React from 'react';
import { setIsAuth } from 'modules/authorization/store/reduser';
import styles from 'modules/_shared/components/app-header/app-header.module.css';
import { useAppDispatch } from 'modules/_shared/store/hooks';
import { LocaleSwitcher } from 'modules/_shared/components/locale-switcher/locale-switcher';

export const AppHeader = () => {
  const dispatch = useAppDispatch();
  const logout = () => dispatch(setIsAuth(false));
  return (
    <header className={styles.header}>
      <LocaleSwitcher />

      <div className={styles.logout} onClick={logout}>
        Выйти
      </div>
    </header>
  );
};
