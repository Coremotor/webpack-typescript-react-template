import React, { FC } from 'react';
import { TCompany } from 'modules/company/types';
import { Card, Col, Row, Text, Title, Space } from 'modules/_shared/ui';
import EditIcon from 'assets/icons/edit.svg';
import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from 'modules/_shared/router/routes';
import { useTranslation } from 'react-i18next';
import styles from './company-contacts.module.css';

type TCompanyContactsProps = {
  company: TCompany | null;
};

export const CompanyContacts: FC<TCompanyContactsProps> = ({ company }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const goToEditCompany = () => navigate(RoutesEnum.editCompany);

  return (
    <Card className={styles.card}>
      <header className={styles.header}>
        <Title className={styles.title} level={4}>
          {t('company.contacts')}
        </Title>
        <div className={styles.icon} onClick={goToEditCompany}>
          <EditIcon />
        </div>
      </header>

      <Space className={styles.wrapper} direction='vertical'>
        <Row gutter={20} wrap={false}>
          <Col flex='30%'>
            <Text type='secondary'>{t('company.mailingAddress')}</Text>
          </Col>
          <Col flex='auto'>{company?.contacts.mailingAddress || ''}</Col>
        </Row>

        <Row gutter={20} wrap={false}>
          <Col flex='30%'>
            <Text type='secondary'>{t('company.phone')}</Text>
          </Col>
          <Col flex='auto'>{company?.contacts.phone || ''}</Col>
        </Row>

        <Row gutter={20} wrap={false}>
          <Col flex='30%'>
            <Text type='secondary'>Email</Text>
          </Col>
          <Col flex='auto'>{company?.contacts.email || ''}</Col>
        </Row>
      </Space>
    </Card>
  );
};
