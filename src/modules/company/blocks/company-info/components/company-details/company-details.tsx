import React, { FC } from 'react';
import {
  Card,
  Divider,
  Space,
  Text,
  Title,
  Row,
  Col,
} from 'modules/_shared/ui';
import Logo from 'assets/icons/organization-big.svg';
import { TCompany } from 'modules/company/types';
import styles from './company-details.module.css';

type TCompanyDetailsProps = {
  company: TCompany | null;
};

export const CompanyDetails: FC<TCompanyDetailsProps> = ({ company }) => {
  const prepareRenderData = [
    { label: 'Полное наименование', value: company?.fullName },
    { label: 'ИНН', value: company?.inn },
    { label: 'ОГРН', value: company?.ogrn },
    { label: 'КПП', value: company?.kpp },
    { label: 'ОКВЭД', value: company?.okved },
    { label: 'Вид капитала', value: company?.capitalType },
    { label: 'Зарегистрировано', value: company?.registered },
    { label: 'Задолженность', value: company?.debt },
    { label: 'Дата регистрации', value: company?.registrationDate },
    { label: 'Регистрирующий орган', value: company?.registrationAuthority },
  ];

  return (
    <Card className={styles.card}>
      <Space size='large' align='center'>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        <Space.Compact direction='vertical'>
          <Title className={styles.title} level={4}>
            {company?.name || ''}
          </Title>
          <Text type='secondary'>{company?.address || ''}</Text>
        </Space.Compact>
      </Space>

      <Divider />

      <Space direction='vertical'>
        {prepareRenderData.map((item) => (
          <Row gutter={20} key={item.label} wrap={false}>
            <Col flex='30%'>
              <Text type='secondary'>{item.label}</Text>
            </Col>
            <Col flex='auto'>{item.value || ''}</Col>
          </Row>
        ))}
      </Space>
    </Card>
  );
};
