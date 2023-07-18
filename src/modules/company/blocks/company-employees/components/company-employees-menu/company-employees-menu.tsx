import React, { FC } from 'react';
import styles from './company-employees-menu.module.css';
import { Link } from 'react-router-dom';
import { RoutesEnum } from 'modules/_shared/router/routes';
import { Space } from 'modules/_shared/ui';
import { stopPropagationFn } from 'modules/_shared/helpers/stopPropagation';

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
    <>
      <Space onClick={stopPropagationFn} direction='vertical'>
        <Link to={RoutesEnum.employee}>Редактировать</Link>
        <div onClick={onDelete}>Удалить</div>
      </Space>
    </>
  );
};
