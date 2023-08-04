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
import { TFounderFormFields } from 'modules/company/types';
import styles from './company-founder.module.css';

const citizenshipOptions = [
  { value: 'РФ', label: 'РФ' },
  { value: 'США', label: 'США' },
  { value: 'Канада', label: 'Канада' },
  { value: 'ОАЭ', label: 'ОАЭ' },
];
const typeOptions = [
  { value: 'Физическое лицо', label: 'Физическое лицо' },
  { value: 'Юридическое лицо', label: 'Юридическое лицо' },
];

export const CompanyFounder = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm<TFounderFormFields>();
  const navigate = useNavigate();
  const { founderId } = useParams();

  const onFinish = (values: TFounderFormFields) => {
    console.log(values);
    navigate(RoutesEnum.Company);
  };

  return (
    <div className={styles.container}>
      <Breadcrumb
        items={[
          {
            title: (
              <Link to={RoutesEnum.Company}>
                {t('companyFounders.founders')}
              </Link>
            ),
          },
          {
            title: founderId
              ? t('companyFounders.editFounder')
              : t('companyFounders.addingFounder'),
          },
        ]}
      />

      <Title level={4}>
        {founderId
          ? t('companyFounders.editFounder')
          : t('companyFounders.addingFounder')}
      </Title>

      <Title level={5}>{t('shared.basicInfo')}</Title>

      <Form
        className={styles.form}
        layout='vertical'
        form={form}
        name='founder'
        onFinish={onFinish}
        requiredMark={false}
        initialValues={{
          isRussiaResident: false,
          isMailingAddressEqualsAddress: false,
        }}
      >
        <Form.Item
          label={t('companyFounders.founder')}
          name='type'
          rules={[{ required: true }]}
        >
          <Select
            size='large'
            placeholder={t('forms.placeholders.type')}
            options={typeOptions}
          />
        </Form.Item>

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
          label={t('forms.labels.capital')}
          name='capitalPart'
          rules={[{ required: true }]}
        >
          <Input placeholder={t('forms.placeholders.capital')} size='large' />
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
