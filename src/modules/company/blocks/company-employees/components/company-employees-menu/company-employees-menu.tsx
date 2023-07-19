import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { RoutesEnum } from 'modules/_shared/router/routes';
import { stopPropagationFn } from 'modules/_shared/helpers/stopPropagation';
import EditIcon from 'assets/icons/edit.svg';
import DeleteIcon from 'assets/icons/delete.svg';
import { Text } from 'modules/_shared/ui';
import styles from './company-employees-menu.module.css';

type TCompanyEmployeesMenuProps = {
  hideMenu: () => void;
  openDeleteEmployeeModal: () => void;
};

export const CompanyEmployeesMenu: FC<TCompanyEmployeesMenuProps> = ({
  hideMenu,
  openDeleteEmployeeModal,
}) => {
  const onDelete = () => {
    hideMenu();
    openDeleteEmployeeModal();
  };

  return (
    <div className={styles.navItemsWrapper} onClick={stopPropagationFn}>
      <Link className={styles.navItem} to={RoutesEnum.employee}>
        <EditIcon />
        <Text className={styles.text}>Редактировать</Text>
      </Link>
      <div className={styles.navItem} onClick={onDelete}>
        <DeleteIcon />
        <Text className={styles.text}>Удалить</Text>
      </div>
    </div>
  );
};
