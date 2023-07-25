import React, { FC } from 'react';
import { Col, Text } from 'modules/_shared/ui';
import { useCompanyEmployeesColumnsWidth } from 'modules/company/blocks/company-employees/hooks/use-company-employees-columns-width';
import { TEmployee } from 'modules/company/types';
import { useAppDispatch, useAppSelector } from 'modules/_shared/store/hooks';
import { setActiveEmployee } from 'modules/company/store/reduser';
import { getActiveEmployee } from 'modules/company/store/selectors';
import { usePopover } from 'modules/_shared/hooks/use-popover';
import { useModal } from 'modules/_shared/hooks/use-modal';
import {
  EditMenuPopover,
  DeleteModal,
  PersonInfoInListItem,
} from 'modules/company/components';
import { useTranslation } from 'react-i18next';
import styles from './company-employees-list-item.module.css';
import { ListItemRow } from 'modules/company/layouts';
import { RoutesEnum } from 'modules/_shared/router/routes';

type TCompanyEmployeesListItemProps = {
  employee: TEmployee;
};

export const CompanyEmployeesListItem: FC<TCompanyEmployeesListItemProps> = ({
  employee,
}) => {
  const { t } = useTranslation();
  const { columnsWidth } = useCompanyEmployeesColumnsWidth();

  const dispatch = useAppDispatch();
  const activeEmployee = useAppSelector(getActiveEmployee);

  const isActive = activeEmployee && activeEmployee.id === employee.id;

  const { open, hide, handleOpenChange } = usePopover();
  const { isModalOpen, showModal, onModalOkButton, onModalCancelButton } =
    useModal();

  const setEmployeeInActive = () => dispatch(setActiveEmployee(employee));

  return (
    <>
      <ListItemRow isActive={isActive} onRowClick={setEmployeeInActive}>
        <>
          <Col className={styles.col} flex={columnsWidth.fullName}>
            <PersonInfoInListItem
              fullName={employee.fullName}
              description={employee.description}
            />
          </Col>

          <Col className={styles.col} flex={columnsWidth.email}>
            <Text ellipsis>{employee.email}</Text>
          </Col>

          <Col className={styles.col} flex={columnsWidth.status}>
            <div className={styles.textWrapper}>
              <Text ellipsis>{employee.status.title}</Text>
              <Text type='secondary' ellipsis>
                {employee.status.value}
              </Text>
            </div>
          </Col>

          <Col className={styles.col} flex={columnsWidth.accessLevel}>
            <Text ellipsis>{employee.accessLevel}</Text>
          </Col>

          <Col className={styles.col} flex={columnsWidth.edit}>
            <EditMenuPopover
              openMenu={open}
              hideMenu={hide}
              openDeleteModal={showModal}
              onOpenMenuChange={handleOpenChange}
              editPagePath={RoutesEnum.employee + '/' + employee.id}
            />
          </Col>
        </>
      </ListItemRow>

      <DeleteModal
        title={t('companyEmployees.deleteEmployee') + '?'}
        deletingObjPosition={t('companyEmployees.employee')}
        deletingObjName={employee.fullName}
        isModalOpen={isModalOpen}
        onModalOkButton={onModalOkButton}
        onModalCancelButton={onModalCancelButton}
      />
    </>
  );
};
