import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'modules/_shared/store/hooks';
import { setCompany } from 'modules/company/store/reduser';
import { companyData } from 'modules/_shared/mock-data/company-data';
import { getCompany } from 'modules/company/store/selectors';
import { Breadcrumb, Button, Form, Input, Title } from 'modules/_shared/ui';
import styles from './company-edit.module.css';
import { notification } from 'antd';

export const CompanyEdit = () => {
  const dispatch = useAppDispatch();
  const company = useAppSelector(getCompany);

  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log(values);
    notification.open({
      type: 'success',
      message: 'Контакты',
      description: 'Изменения успешно сохранены',
    });
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
          { title: 'Моя компания' },
          { title: 'Редактирование контактной информации' },
        ]}
      />
      <Title className={styles.title} level={4}>
        Контакты
      </Title>

      <Form
        className={styles.form}
        layout='vertical'
        form={form}
        name='company-contacts'
        onFinish={onFinish}
        requiredMark={false}
      >
        <Form.Item
          label='Почтовый адрес'
          name='mailingAddress'
          rules={[{ required: true }]}
        >
          <Input placeholder='Адрес' />
        </Form.Item>

        <Form.Item label='Телефон' name='phone' rules={[{ required: true }]}>
          <Input placeholder='Телефон' />
        </Form.Item>

        <Button type='primary' htmlType='submit'>
          Сохранить
        </Button>
      </Form>
    </div>
  );
};
