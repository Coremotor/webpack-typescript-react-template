import React from 'react';
import { Drawer, Space } from 'modules/_shared/ui';
import { useShowCompanyEmployeesDetails } from 'modules/company/blocks/company-employees/hooks/use-show-company-employees-details';
import styles from './company-employees-details.module.css';

export const CompanyEmployeesDetails = () => {
  const { open, onClose, activeEmployee } = useShowCompanyEmployeesDetails();

  return (
    <Drawer
      destroyOnClose
      placement='right'
      width={500}
      onClose={onClose}
      open={open}
      title={activeEmployee?.fullName || ''}
    >
      <Space className={styles.wrapper} direction='vertical'>
        Details
      </Space>
    </Drawer>
  );
};
