import React from 'react';
import {
  Breadcrumb,
  Form,
  Input,
  Title,
  Checkbox,
  DatePicker,
  Select,
  Button,
} from 'modules/_shared/ui';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { RoutesEnum } from 'modules/_shared/router/routes';
import { useTranslation } from 'react-i18next';
import { TManagerFormFields } from 'modules/company/types';
import styles from './company-manager.module.css';

const citizenshipOptions = [
  { value: 'РФ', label: 'РФ' },
  { value: 'США', label: 'США' },
  { value: 'Канада', label: 'Канада' },
  { value: 'ОАЭ', label: 'ОАЭ' },
];
const actOptions = [
  { value: 'Устав', label: 'Устав' },
  { value: 'Справка', label: 'Справка' },
  { value: 'Расписка', label: 'Расписка' },
];

export const CompanyManager = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm<TManagerFormFields>();
  const navigate = useNavigate();
  const { managerId } = useParams();

  const onFinish = (values: TManagerFormFields) => {
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
                {t('companyManagers.managers')}
              </Link>
            ),
          },
          {
            title: managerId
              ? t('companyManagers.editManager')
              : t('companyManagers.addingManager'),
          },
        ]}
      />

      <Title level={4}>
        {managerId
          ? t('companyManagers.editManager')
          : t('companyManagers.addingManager')}
      </Title>

      <Title level={5}>{t('shared.basicInfo')}</Title>

      <Form
        className={styles.form}
        layout='vertical'
        form={form}
        name='manager'
        onFinish={onFinish}
        requiredMark={false}
        initialValues={{
          isRussiaResident: false,
          isMailingAddressEqualsAddress: false,
        }}
      >
        <Form.Item
          name='isRussiaResident'
          label={t('')}
          valuePropName='checked'
          rules={[{ required: true }]}
        >
          <Checkbox>{t('forms.labels.resident')}</Checkbox>
        </Form.Item>

        <Form.Item
          label={t('forms.labels.fullName')}
          name='fullName'
          rules={[{ required: true }]}
        >
          <Input placeholder={t('forms.placeholders.fullName')} size='large' />
        </Form.Item>

        <Form.Item
          label={t('forms.labels.citizenship')}
          name='citizenship'
          rules={[{ required: true }]}
        >
          <Select
            size='large'
            placeholder={t('forms.placeholders.citizenship')}
            options={citizenshipOptions}
          />
        </Form.Item>

        <Form.Item
          label={t('forms.labels.position')}
          name='position'
          rules={[{ required: true }]}
        >
          <Input placeholder={t('forms.placeholders.position')} size='large' />
        </Form.Item>

        <Form.Item
          label={t('forms.labels.documents')}
          name='act'
          rules={[{ required: true }]}
        >
          <Select
            size='large'
            placeholder={t('forms.placeholders.documents')}
            options={actOptions}
          />
        </Form.Item>

        <Form.Item
          label={t('forms.labels.signingDocumentsFullName')}
          name='fullNameForDocs'
          rules={[{ required: true }]}
        >
          <Input placeholder={t('forms.placeholders.fullName')} size='large' />
        </Form.Item>

        <div className={styles.inputsWrapper}>
          <Form.Item
            className={styles.input}
            label={t('forms.labels.inn')}
            name='inn'
            rules={[{ required: true }]}
          >
            <Input placeholder={t('forms.placeholders.inn')} size='large' />
          </Form.Item>

          <Form.Item
            className={styles.input}
            label={t('forms.labels.snils')}
            name='snils'
            rules={[{ required: true }]}
          >
            <Input placeholder={t('forms.placeholders.snils')} size='large' />
          </Form.Item>
        </div>

        <div className={styles.inputsWrapper}>
          <Form.Item
            className={styles.input}
            label={t('forms.labels.birthday')}
            name='birthday'
            rules={[{ required: true }]}
          >
            <DatePicker
              placeholder={t('forms.placeholders.birthday')}
              className={styles.input}
              size='large'
            />
          </Form.Item>

          <Form.Item
            className={styles.input}
            label={t('forms.labels.phone')}
            name='phone'
            rules={[{ required: true }]}
          >
            <Input placeholder={t('forms.placeholders.phone')} size='large' />
          </Form.Item>
        </div>

        <Form.Item
          label={t('forms.labels.birthPlace')}
          name='birthPlace'
          rules={[{ required: true }]}
        >
          <Input
            placeholder={t('forms.placeholders.birthPlace')}
            size='large'
          />
        </Form.Item>

        <Form.Item
          label={t('forms.labels.address')}
          name='address'
          rules={[{ required: true }]}
        >
          <Input placeholder={t('forms.placeholders.address')} size='large' />
        </Form.Item>

        <Form.Item
          name='isMailingAddressEqualsAddress'
          label={t('')}
          valuePropName='checked'
          rules={[{ required: true }]}
        >
          <Checkbox>{t('forms.labels.isAddressEqualsMailingAddress')}</Checkbox>
        </Form.Item>

        <Title level={5}>{t('shared.passportInfo')}</Title>

        <div className={styles.inputsWrapper}>
          <Form.Item
            className={styles.input}
            label={t('forms.labels.passportSeries')}
            name='passportSeries'
            rules={[{ required: true }]}
          >
            <Input
              placeholder={t('forms.placeholders.passportSeries')}
              size='large'
            />
          </Form.Item>

          <Form.Item
            className={styles.input}
            label={t('forms.labels.passportNumber')}
            name='passportNumber'
            rules={[{ required: true }]}
          >
            <Input
              placeholder={t('forms.placeholders.passportNumber')}
              size='large'
            />
          </Form.Item>
        </div>

        <div className={styles.inputsWrapper}>
          <Form.Item
            className={styles.input}
            label={t('forms.labels.passportDate')}
            name='passportDate'
            rules={[{ required: true }]}
          >
            <DatePicker
              placeholder={t('forms.placeholders.passportDate')}
              className={styles.input}
              size='large'
            />
          </Form.Item>

          <Form.Item
            className={styles.input}
            label={t('forms.labels.passportCode')}
            name='passportCode'
            rules={[{ required: true }]}
          >
            <Input
              placeholder={t('forms.placeholders.passportCode')}
              size='large'
            />
          </Form.Item>
        </div>

        <Form.Item
          className={styles.input}
          label={t('forms.labels.passportOrgan')}
          name='passportOrgan'
          rules={[{ required: true }]}
        >
          <Input
            placeholder={t('forms.placeholders.passportOrgan')}
            size='large'
          />
        </Form.Item>

        <Form.Item>
          <Button size='large' type='primary' htmlType='submit'>
            {t('shared.save')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
