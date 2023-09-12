import React from 'react';
import { Col, Row, Text } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';
import { useCompanyFoundersColumnsWidth } from 'modules/company/blocks/company-founders/hooks/use-company-founders-columns-width';
import styles from './company-founders-list-header.module.css';

export const CompanyFoundersListHeader = () => {
  const { t } = useTranslation();
  const { companyFoundersColumnsWidth } = useCompanyFoundersColumnsWidth();

  return (
    <Row className={styles.row} wrap={false}>
      <Col className={styles.col} flex={companyFoundersColumnsWidth.fullName}>
        {t('companyFounders.fullName')}
      </Col>
      <Col className={styles.col} flex={companyFoundersColumnsWidth.resident}>
        <Text ellipsis>{t('companyFounders.resident')}</Text>
      </Col>
      <Col
        className={styles.col}
        flex={companyFoundersColumnsWidth.citizenship}
      >
        <Text ellipsis>{t('companyFounders.citizenship')}</Text>
      </Col>
      <Col className={styles.col} flex={companyFoundersColumnsWidth.phone}>
        <Text ellipsis>{t('companyFounders.phone')}</Text>
      </Col>
      <Col className={styles.col} flex={companyFoundersColumnsWidth.edit} />
    </Row>
  );
};
