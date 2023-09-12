import React, { FC, ReactNode } from 'react';
import styles from './list-item.module.css';
import { List } from 'modules/_shared/ui';

type TListItemProps = {
  children: ReactNode;
};

export const ListItem: FC<TListItemProps> = ({ children }) => {
  return <List.Item className={styles.item}>{children}</List.Item>;
};
