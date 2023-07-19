import React from 'react';
import { Drawer, Divider, Text } from 'modules/_shared/ui';
import { useShowCompanyEmployeesDetails } from 'modules/company/blocks/company-employees/hooks/use-show-company-employees-details';
import { TextAvatar } from 'modules/_shared/components';
import { transformFullName } from 'modules/_shared/utils/text-transform';
import { CompanyEmployeesDelete } from 'modules/company/blocks/company-employees/components';
import { useModal } from 'modules/_shared/hooks/use-modal';
import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from 'modules/_shared/router/routes';
import CloseIcon from 'assets/icons/close.svg';
import EditIcon from 'assets/icons/edit.svg';
import DeleteIcon from 'assets/icons/delete.svg';
import classNames from 'classnames';
import styles from './company-employees-details.module.css';

export const CompanyEmployeesDetails = () => {
  const navigate = useNavigate();
  const goToEditEmployee = () => {
    onEmployeeDetailsClose();
    navigate(RoutesEnum.employee);
  };

  const { isEmployeeDetailsOpen, onEmployeeDetailsClose, activeEmployee } =
    useShowCompanyEmployeesDetails();

  const { isModalOpen, showModal, onModalOkButton, onModalCancelButton } =
    useModal();

  const onDeleteEmployee = () => {
    onEmployeeDetailsClose();
    onModalOkButton();
  };

  return (
    <Drawer
      destroyOnClose
      placement='right'
      width={500}
      onClose={onEmployeeDetailsClose}
      open={isEmployeeDetailsOpen}
      closable={false}
    >
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.close} onClick={onEmployeeDetailsClose}>
            <CloseIcon />
          </div>

          <div className={styles.employeeWrapper}>
            <TextAvatar
              str={transformFullName(activeEmployee?.fullName)}
              width={64}
              height={64}
            />
            <div className={styles.employeeInfo}>
              <Text strong>{activeEmployee?.fullName}</Text>
              <Text type='secondary'>{activeEmployee?.description}</Text>
              <Text>{activeEmployee?.status.title}</Text>
            </div>
          </div>

          <div className={styles.buttons}>
            <div
              onClick={goToEditEmployee}
              className={classNames(styles.edit, styles.icon)}
            >
              <EditIcon />
            </div>
            <div
              onClick={showModal}
              className={classNames(styles.delete, styles.icon)}
            >
              <DeleteIcon />
            </div>
          </div>
        </header>
        <Divider />
        <div>{activeEmployee?.fullName}</div>
      </div>

      <CompanyEmployeesDelete
        employee={activeEmployee}
        isModalOpen={isModalOpen}
        onModalOkButton={onDeleteEmployee}
        onModalCancelButton={onModalCancelButton}
      />
    </Drawer>
  );
};
