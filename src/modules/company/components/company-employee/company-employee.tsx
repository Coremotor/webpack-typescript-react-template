import React from 'react';
import {
  Breadcrumb,
  Button,
  Form,
  Input,
  Select,
  Title,
} from 'modules/_shared/ui';
import { Link, useNavigate } from 'react-router-dom';
import { RoutesEnum } from 'modules/_shared/router/routes';
import { useTranslation } from 'react-i18next';
import {
  accessLevelOptions,
  availableObjectOptions,
} from 'modules/_shared/mock-data/company-data';
import { TEmployeeFormFields } from 'modules/company/types';
import styles from 'modules/company/components/company-employee/company-employee.module.css';

const filter = (input: string, option: { value: string; label: string }) =>
  ((option?.label as string) ?? '').toLowerCase().includes(input.toLowerCase());

export const CompanyEmployee = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm<TEmployeeFormFields>();
  const navigate = useNavigate();

  const onFinish = (values: TEmployeeFormFields) => {
    console.log(values);
    navigate(RoutesEnum.company);
  };

  return (
    <div className={styles.container}>
      <Breadcrumb
        items={[
          {
            title: (
              <Link to={RoutesEnum.company}>
                {t('companyEmployees.employees')}
              </Link>
            ),
          },
          { title: t('companyEmployees.addingEmployee') },
        ]}
      />

      <Title level={4}>{t('companyEmployees.addingEmployee')}</Title>

      <Form
        className={styles.form}
        layout='vertical'
        form={form}
        name='employee'
        onFinish={onFinish}
        requiredMark={false}
      >
        <Form.Item
          label={t('companyEmployees.fullName')}
          name='fullName'
          rules={[{ required: true }]}
        >
          <Input
            placeholder={t('companyEmployees.fullNamePlaceholder')}
            size='large'
          />
        </Form.Item>

        <Form.Item
          label={t('companyEmployees.position')}
          name='position'
          rules={[{ required: true }]}
        >
          <Input
            placeholder={t('companyEmployees.positionPlaceholder')}
            size='large'
          />
        </Form.Item>

        <div className={styles.inputsWrapper}>
          <Form.Item
            className={styles.inputEmail}
            label='Email'
            name='email'
            rules={[{ required: true, type: 'email' }]}
          >
            <Input
              className={styles.input}
              placeholder={t('companyEmployees.emailPlaceholder')}
              size='large'
            />
          </Form.Item>

          <Form.Item
            className={styles.input}
            label={t('companyEmployees.phone')}
            name='phone'
            rules={[{ required: true }]}
          >
            <Input
              className={styles.input}
              placeholder={t('companyEmployees.phonePlaceholder')}
              size='large'
            />
          </Form.Item>
        </div>

        <Form.Item
          label={t('companyEmployees.access')}
          name='access'
          rules={[{ required: true }]}
        >
          <Select
            size='large'
            allowClear
            placeholder={t('companyEmployees.accessPlaceholder')}
            options={accessLevelOptions}
          />
        </Form.Item>

        <Form.Item
          label={t('companyEmployees.available')}
          name='available'
          rules={[{ required: true }]}
        >
          <Select
            size='large'
            mode='multiple'
            allowClear
            placeholder={t('companyEmployees.availablePlaceholder')}
            options={availableObjectOptions}
            showSearch
            filterOption={filter}
          />
        </Form.Item>

        <Button type='primary' htmlType='submit' size='large'>
          {t('company.saveButton')}
        </Button>
      </Form>
    </div>
  );
};
