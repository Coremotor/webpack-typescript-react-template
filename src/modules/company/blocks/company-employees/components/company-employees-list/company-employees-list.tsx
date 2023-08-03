import React, { useEffect } from 'react';
import { List } from 'modules/_shared/ui';
import {
  CompanyEmployeesListHeader,
  CompanyEmployeesListItem,
} from 'modules/company/blocks/company-employees/components';
import {
  useAppDispatch,
  useAppSelector,
} from 'modules/_shared/root-store/hooks';
import { getEmployees } from 'modules/company/store/selectors';
import { setEmployees } from 'modules/company/store/reducer';
import { employeesData } from 'modules/_shared/mock-data/company-data';
import { ListItem } from 'modules/_shared/layouts/list';
import styles from './company-employees-list.module.css';

export const CompanyEmployeesList = () => {
  const dispatch = useAppDispatch();
  const employees = useAppSelector(getEmployees);

  useEffect(() => {
    dispatch(setEmployees(employeesData));
  }, []);

  return (
    <>
      <CompanyEmployeesListHeader />
      <List
        className={styles.list}
        dataSource={employees}
        renderItem={(employee) => (
          <ListItem>
            <CompanyEmployeesListItem employee={employee} />
          </ListItem>
        )}
      />
    </>
  );
};
