import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { stopPropagationFn } from 'modules/_shared/helpers/stopPropagation';
import EditIcon from 'assets/icons/edit.svg';
import DeleteIcon from 'assets/icons/delete.svg';
import { Text } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';
import styles from './edit-menu.module.css';

type TEditMenuProps = {
  hideMenu: () => void;
  openDeleteModal: () => void;
  editPagePath: string;
};

export const EditMenu: FC<TEditMenuProps> = ({
  hideMenu,
  openDeleteModal,
  editPagePath,
}) => {
  const { t } = useTranslation();
  const onDelete = () => {
    hideMenu();
    openDeleteModal();
  };

  return (
    <div className={styles.navItemsWrapper} onClick={stopPropagationFn}>
      <Link className={styles.navItem} to={editPagePath}>
        <EditIcon />
        <Text className={styles.text}>{t('shared.edit')}</Text>
      </Link>
      <div className={styles.navItem} onClick={onDelete}>
        <DeleteIcon />
        <Text className={styles.text}>{t('shared.delete')}</Text>
      </div>
    </div>
  );
};
