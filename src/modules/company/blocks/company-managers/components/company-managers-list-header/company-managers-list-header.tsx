import React from 'react';
import { Col, Row, Text } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';
import { useCompanyManagersColumnsWidth } from 'modules/company/blocks/company-managers/hooks/use-company-managers-columns-width';
import styles from './company-managers-list-header.module.css';

export const CompanyManagersListHeader = () => {
  const { t } = useTranslation();
  const { managerListColumnsWidth } = useCompanyManagersColumnsWidth();

  return (
    <Row className={styles.row} wrap={false}>
      <Col className={styles.col} flex={managerListColumnsWidth.fullName}>
        {t('companyManagers.fullName')}
      </Col>
      <Col className={styles.col} flex={managerListColumnsWidth.resident}>
        <Text ellipsis>{t('companyManagers.resident')}</Text>
      </Col>
      <Col className={styles.col} flex={managerListColumnsWidth.citizenship}>
        <Text ellipsis>{t('companyManagers.citizenship')}</Text>
      </Col>
      <Col className={styles.col} flex={managerListColumnsWidth.phone}>
        <Text ellipsis>{t('companyManagers.phone')}</Text>
      </Col>
      <Col className={styles.col} flex={managerListColumnsWidth.edit} />
    </Row>
  );
};
