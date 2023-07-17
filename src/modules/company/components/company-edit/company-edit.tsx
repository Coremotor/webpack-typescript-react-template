import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'modules/_shared/store/hooks';
import { setCompany } from 'modules/company/store/reduser';
import { companyData } from 'modules/_shared/mock-data/company-data';
import { getCompany } from 'modules/company/store/selectors';
import { Breadcrumb, Button, Form, Input, Title } from 'modules/_shared/ui';
import { App } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { RoutesEnum } from 'modules/_shared/router/routes';
import { useTranslation } from 'react-i18next';
import styles from './company-edit.module.css';

type TFormFields = {
  mailingAddress: string;
  phone: string;
};

export const CompanyEdit = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const company = useAppSelector(getCompany);
  const { notification } = App.useApp();
  const navigate = useNavigate();

  const [form] = Form.useForm<TFormFields>();
  const onFinish = (values: TFormFields) => {
    console.log(values);
    notification.open({
      type: 'success',
      message: 'Контакты',
      description: 'Изменения успешно сохранены',
    });
    navigate(RoutesEnum.company);
  };

  useEffect(() => {
    console.log('Load company DTO');
    dispatch(setCompany(companyData));
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      mailingAddress: company?.contacts.mailingAddress,
      phone: company?.contacts.phone,
    });
  }, [company]);

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
