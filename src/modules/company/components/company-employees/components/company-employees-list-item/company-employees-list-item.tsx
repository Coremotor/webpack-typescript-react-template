import React, { FC } from 'react';
import { Col, Popover, Row, Text, Space } from 'modules/_shared/ui';
import { useCompanyEmployeesColumnsWidth } from 'modules/company/components/company-employees/hooks/use-company-employees-columns-width';
import { TEmployee } from 'modules/company/types';
import styles from './company-employees-list-item.module.css';

type CompanyEmployeesListItemProps = {
  employee: TEmployee;
};

export const CompanyEmployeesListItem: FC<CompanyEmployeesListItemProps> = ({
  employee,
}) => {
  const { columnsWidth } = useCompanyEmployeesColumnsWidth();

  return (
    <Row className={styles.row} wrap={false}>
      <Col className={styles.col} flex={columnsWidth.fullName}>
        <Space.Compact direction='vertical'>
          <Text ellipsis>{employee.fullName}</Text>
          <Text type='secondary' ellipsis>
            {employee.description}
          </Text>
        </Space.Compact>
      </Col>

      <Col className={styles.col} flex={columnsWidth.email}>
        <Text ellipsis>{employee.email}</Text>
      </Col>

      <Col className={styles.col} flex={columnsWidth.status}>
        <Space.Compact direction='vertical'>
          <Text ellipsis>{employee.status.title}</Text>
          <Text type='secondary' ellipsis>
            {employee.status.value}
          </Text>
        </Space.Compact>
      </Col>

      <Col className={styles.col} flex={columnsWidth.accessLevel}>
        <Text ellipsis>{employee.accessLevel}</Text>
      </Col>

      <Col className={styles.col} flex={columnsWidth.edit}>
        <Popover
          destroyTooltipOnHide
          placement='bottomRight'
          content={<div>Menu</div>}
          trigger='click'
          arrow={false}
        >
          <div className={styles.icon}>icon</div>
        </Popover>
      </Col>
    </Row>
  );
};
