import React, { useEffect } from 'react';
import { List } from 'modules/_shared/ui';
import {
  useAppDispatch,
  useAppSelector,
} from 'modules/_shared/root-store/hooks';
import { getFounders } from 'modules/company/store/selectors';
import { setFounders } from 'modules/company/store/reducer';
import { foundersData } from 'modules/_shared/mock-data/company-data';
import { ListItem } from 'modules/company/layouts';
import {
  CompanyFoundersListHeader,
  CompanyFoundersListItem,
} from 'modules/company/blocks/company-founders/components';
import styles from './company-founders-list.module.css';

export const CompanyFoundersList = () => {
  const dispatch = useAppDispatch();
  const founders = useAppSelector(getFounders);

  useEffect(() => {
    dispatch(setFounders(foundersData));
  }, []);

  return (
    <>
      <CompanyFoundersListHeader />
      <List
        className={styles.list}
        dataSource={founders}
        renderItem={(founder) => (
          <ListItem>
            <CompanyFoundersListItem founder={founder} />
          </ListItem>
        )}
      />
    </>
  );
};
