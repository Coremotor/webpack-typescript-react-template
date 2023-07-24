import React, { FC, ReactNode } from 'react';
import styles from './auth-reg-layout.module.css';

type TAuthRegLayoutProps = {
  children: ReactNode;
};

export const AuthRegLayout: FC<TAuthRegLayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>{children}</div>
    </div>
  );
};
