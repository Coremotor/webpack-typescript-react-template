import React, { useEffect } from 'react';
import { List } from 'modules/_shared/ui';
import {
  useAppDispatch,
  useAppSelector,
} from 'modules/_shared/root-store/hooks';
import { getManagers } from 'modules/company/store/selectors';
import { setManagers } from 'modules/company/store/reducer';
import { managersData } from 'modules/_shared/mock-data/company-data';
import {
  CompanyManagersListHeader,
  CompanyManagersListItem,
} from 'modules/company/blocks/company-managers/components';
import { ListItem } from 'modules/_shared/layouts/list';
import styles from './company-managers-list.module.css';

export const CompanyManagersList = () => {
  const dispatch = useAppDispatch();
  const managers = useAppSelector(getManagers);

  useEffect(() => {
    dispatch(setManagers(managersData));
  }, []);

  return (
    <>
      <CompanyManagersListHeader />
      <List
        className={styles.list}
        dataSource={managers}
        renderItem={(manager) => (
          <ListItem>
            <CompanyManagersListItem manager={manager} />
          </ListItem>
        )}
      />
    </>
  );
};
