import React from 'react';
import { Col, Row, Text } from 'modules/_shared/ui';
import { useCompanyEmployeesColumnsWidth } from 'modules/company/components/company-employees/hooks/use-company-employees-columns-width';
import { useTranslation } from 'react-i18next';
import styles from './company-employees-list-header.module.css';

export const CompanyEmployeesListHeader = () => {
  const { t } = useTranslation();
  const { columnsWidth } = useCompanyEmployeesColumnsWidth();

  return (
    <Row className={styles.row} wrap={false}>
      <Col className={styles.col} flex={columnsWidth.fullName}>
        {t('companyEmployees.fullName')}
      </Col>
      <Col className={styles.col} flex={columnsWidth.email}>
        <Text ellipsis>Email</Text>
      </Col>
      <Col className={styles.col} flex={columnsWidth.email}>
        <Text ellipsis>{t('companyEmployees.status')}</Text>
      </Col>
      <Col className={styles.col} flex={columnsWidth.email}>
        <Text ellipsis>{t('companyEmployees.access')}</Text>
      </Col>
      <Col className={styles.col} flex={columnsWidth.edit} />
    </Row>
  );
};
