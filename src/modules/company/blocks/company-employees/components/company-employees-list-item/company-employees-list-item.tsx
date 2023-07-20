import React, { FC } from 'react';
import { Col, Row, Text } from 'modules/_shared/ui';
import { useCompanyEmployeesColumnsWidth } from 'modules/company/blocks/company-employees/hooks/use-company-employees-columns-width';
import { TEmployee } from 'modules/company/types';
import { useAppDispatch, useAppSelector } from 'modules/_shared/store/hooks';
import { setActiveEmployee } from 'modules/company/store/reduser';
import { getActiveEmployee } from 'modules/company/store/selectors';
import { transformFullName } from 'modules/_shared/utils/text-transform';
import { TextAvatar } from 'modules/_shared/components';
import {
  CompanyEmployeesDelete,
  CompanyEmployeesMenuPopover,
} from 'modules/company/blocks/company-employees/components';
import { usePopover } from 'modules/_shared/hooks/use-popover';
import { useModal } from 'modules/_shared/hooks/use-modal';
import classNames from 'classnames';
import styles from './company-employees-list-item.module.css';

type CompanyEmployeesListItemProps = {
  employee: TEmployee;
};

export const CompanyEmployeesListItem: FC<CompanyEmployeesListItemProps> = ({
  employee,
}) => {
  const { columnsWidth } = useCompanyEmployeesColumnsWidth();

  const dispatch = useAppDispatch();
  const activeEmployee = useAppSelector(getActiveEmployee);
  const isActive = activeEmployee && activeEmployee.id === employee.id;

  const { open, hide, handleOpenChange } = usePopover();
  const { isModalOpen, showModal, onModalOkButton, onModalCancelButton } =
    useModal();

  const setEmployee = () => dispatch(setActiveEmployee(employee));
  return (
    <>
      <Row
        className={classNames(styles.row, {
          [styles.active]: isActive,
        })}
        wrap={false}
        onClick={setEmployee}
      >
        <Col className={styles.col} flex={columnsWidth.fullName}>
          <div className={styles.fullNameWrapper}>
            <TextAvatar str={transformFullName(employee.fullName)} />
            <div className={styles.textWrapper}>
              <Text ellipsis>{employee.fullName}</Text>
              <Text type='secondary' ellipsis>
                {employee.description}
              </Text>
            </div>
          </div>
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
          <CompanyEmployeesMenuPopover
            open={open}
            hide={hide}
            showModal={showModal}
            handleOpenChange={handleOpenChange}
            employee={employee}
          />
        </Col>
      </Row>

      <CompanyEmployeesDelete
        employee={employee}
        isModalOpen={isModalOpen}
        onModalCancelButton={onModalCancelButton}
        onModalOkButton={onModalOkButton}
      />
    </>
  );
};
