import React from 'react';
import { Space } from 'modules/_shared/ui';
import { CompanyNavigation } from 'modules/company/blocks';
import styles from './app-header.module.css';

export const AppHeader = () => {
  return (
    <Space className={styles.header}>
      <CompanyNavigation />
    </Space>
  );
};
