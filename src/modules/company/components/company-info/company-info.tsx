import React from 'react';
import { useAppSelector } from 'modules/_shared/store/hooks';
import { getCompany } from 'modules/company/store/selectors';
import {
  CompanyContacts,
  CompanyDetails,
} from 'modules/company/components/company-info/components';
import styles from './company-info.module.css';

export const CompanyInfo = () => {
  const company = useAppSelector(getCompany);

  return (
    <div className={styles.container}>
      <CompanyDetails company={company} />
      <CompanyContacts company={company} />
    </div>
  );
};
