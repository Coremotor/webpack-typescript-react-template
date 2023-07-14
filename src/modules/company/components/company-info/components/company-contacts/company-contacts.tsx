import React, { FC } from 'react';
import { TCompany } from 'modules/company/types';
import { Card, Col, Row, Text, Title, Space } from 'modules/_shared/ui';
import EditIcon from 'assets/icons/edit.svg';
import styles from './company-contacts.module.css';
import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from 'modules/_shared/router/routes';

type TCompanyContactsProps = {
  company: TCompany | null;
};

export const CompanyContacts: FC<TCompanyContactsProps> = ({ company }) => {
  const navigate = useNavigate();
  const goToEditCompany = () => navigate(RoutesEnum.editCompany);

  return (
    <Card className={styles.card}>
      <header className={styles.header}>
        <Title className={styles.title} level={4}>
          Контакты
        </Title>
        <div className={styles.icon} onClick={goToEditCompany}>
          <EditIcon />
        </div>
      </header>

      <Space className={styles.wrapper} direction='vertical'>
        <Row gutter={20} wrap={false}>
          <Col flex='30%'>
            <Text type='secondary'>Почтовый адрес</Text>
          </Col>
          <Col flex='auto'>{company?.contacts.mailingAddress || ''}</Col>
        </Row>

        <Row gutter={20} wrap={false}>
          <Col flex='30%'>
            <Text type='secondary'>Телефон</Text>
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
