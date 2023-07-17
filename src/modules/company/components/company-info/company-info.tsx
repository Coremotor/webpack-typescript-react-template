import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'modules/_shared/store/hooks';
import { getCompany } from 'modules/company/store/selectors';
import {
  CompanyContacts,
  CompanyDetails,
} from 'modules/company/components/company-info/components';
import styles from './company-info.module.css';
import { setCompany } from 'modules/company/store/reduser';
import { companyData } from 'modules/_shared/mock-data/company-data';

export const CompanyInfo = () => {
  const dispatch = useAppDispatch();
  const company = useAppSelector(getCompany);

  useEffect(() => {
    console.log('Load company DTO');
    dispatch(setCompany(companyData));
  }, []);

  return (
    <div className={styles.container}>
      <CompanyDetails company={company} />
      <CompanyContacts company={company} />
    </div>
  );
};
