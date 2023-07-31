import React, { FC } from 'react';
import { Col, Row, Space, Text } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';

type TCompanyManagersDetailsInfoProps = {
  data: { value: string; label: string }[];
};
export const CompanyFoundersDetailsInfo: FC<
  TCompanyManagersDetailsInfoProps
> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <Space direction='vertical' style={{ width: '100%' }}>
      {data.map((row) => (
        <Row key={row.label} gutter={40}>
          <Col flex='40%'>
            <Text type='secondary'>{t(`${row.label}`)}</Text>
          </Col>
          <Col flex='60%'>{t(`${row.value}`)}</Col>
        </Row>
      ))}
    </Space>
  );
};
