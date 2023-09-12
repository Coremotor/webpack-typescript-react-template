import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { Row } from 'modules/_shared/ui';
import styles from './list-item-row.module.css';

type TListItemRowProps = {
  isActive: boolean | null;
  onRowClick: () => void;
  children: ReactNode;
};

export const ListItemRow: FC<TListItemRowProps> = ({
  isActive,
  onRowClick,
  children,
}) => {
  return (
    <Row
      className={classNames(styles.row, {
        [styles.active]: isActive,
      })}
      wrap={false}
      onClick={onRowClick}
    >
      {children}
    </Row>
  );
};
