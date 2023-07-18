import React from 'react';
import { Breadcrumb, Button, Form, Input, Title } from 'modules/_shared/ui';
import { Link } from 'react-router-dom';
import { RoutesEnum } from 'modules/_shared/router/routes';
import { useTranslation } from 'react-i18next';
import { useCompanyEdit } from 'modules/company/blocks/company-edit/hooks/use-company-edit';
import styles from './company-edit.module.css';

export const CompanyEdit = () => {
  const { t } = useTranslation();
  const { onFinish, form } = useCompanyEdit();

  return (
    <div className={styles.container}>
      <Breadcrumb
        items={[
          {
            title: (
              <Link to={RoutesEnum.company}>{t('company.myCompany')}</Link>
            ),
          },
          { title: t('company.editContacts') },
        ]}
      />
      <Title level={4}>{t('company.contacts')}</Title>

      <Form
        className={styles.form}
        layout='vertical'
        form={form}
        name='company-contacts'
        onFinish={onFinish}
        requiredMark={false}
      >
        <Form.Item
          label={t('company.mailingAddress')}
          name='mailingAddress'
          rules={[{ required: true }]}
        >
          <Input placeholder={t('company.mailingAddress')} />
        </Form.Item>

        <Form.Item
          label={t('company.phone')}
          name='phone'
          rules={[{ required: true }]}
        >
          <Input placeholder={t('company.phone')} />
        </Form.Item>

        <Button type='primary' htmlType='submit'>
          {t('company.saveButton')}
        </Button>
      </Form>
    </div>
  );
};
