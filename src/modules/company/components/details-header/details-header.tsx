import React, { FC } from 'react';
import CloseIcon from 'assets/icons/close.svg';
import { TextAvatar } from 'modules/_shared/components';
import { transformFullName } from 'modules/_shared/utils/text-transform';
import { Text } from 'modules/_shared/ui';
import classNames from 'classnames';
import EditIcon from 'assets/icons/edit.svg';
import DeleteIcon from 'assets/icons/delete.svg';
import styles from './details-header.module.css';

type TDetailsHeaderProps = {
  fullName: string;
  description: string;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

export const DetailsHeader: FC<TDetailsHeaderProps> = ({
  fullName,
  description,
  onClose,
  onEdit,
  onDelete,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.close} onClick={onClose}>
        <CloseIcon />
      </div>

      <div className={styles.wrapper}>
        <TextAvatar str={transformFullName(fullName)} width={64} height={64} />
        <div className={styles.info}>
          <Text strong>{fullName}</Text>
          <Text type='secondary'>{description}</Text>
        </div>
      </div>

      <div className={styles.buttons}>
        <div onClick={onEdit} className={classNames(styles.edit, styles.icon)}>
          <EditIcon />
        </div>
        <div
          onClick={onDelete}
          className={classNames(styles.delete, styles.icon)}
        >
          <DeleteIcon />
        </div>
      </div>
    </header>
  );
};
