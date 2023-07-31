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
    navigate(RoutesEnum.company);
  };

  return (
    <div className={styles.container}>
      <Breadcrumb
        items={[
          {
            title: <Link to={RoutesEnum.company}>{t('Учредители')}</Link>,
          },
          {
            title: founderId
              ? t('Редактирование учредителей')
              : t('Добавление учредителей'),
          },
        ]}
      />

      <Title level={4}>
        {founderId
          ? t('Редактирование учредителей')
          : t('Добавление учредителей')}
      </Title>

      <Title level={5}>{t('Основная информация')}</Title>

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
          label={t('Учредитель')}
          name='type'
          rules={[{ required: true }]}
        >
          <Select
            size='large'
            placeholder={t('Выберите тип')}
            options={typeOptions}
          />
        </Form.Item>

        <Form.Item
          name='isRussiaResident'
          label={t('')}
          valuePropName='checked'
          rules={[{ required: true }]}
        >
          <Checkbox>{t('Резидент РФ')}</Checkbox>
        </Form.Item>

        <Form.Item
          label={t('ФИО')}
          name='fullName'
          rules={[{ required: true }]}
        >
          <Input placeholder={t('Введите ФИО руководства')} size='large' />
        </Form.Item>

        <Form.Item
          label={t('Гражданство')}
          name='citizenship'
          rules={[{ required: true }]}
        >
          <Select
            size='large'
            placeholder={t('Выберите гражданство')}
            options={citizenshipOptions}
          />
        </Form.Item>

        <Form.Item
          label={t('Доля в капитале')}
          name='capitalPart'
          rules={[{ required: true }]}
        >
          <Input placeholder={t('Введите долю в капитале')} size='large' />
        </Form.Item>

        <div className={styles.inputsWrapper}>
          <Form.Item
            className={styles.input}
            label={t('ИНН')}
            name='inn'
            rules={[{ required: true }]}
          >
            <Input placeholder={t('Введите ИНН')} size='large' />
          </Form.Item>

          <Form.Item
            className={styles.input}
            label={t('СНИЛС')}
            name='snils'
            rules={[{ required: true }]}
          >
            <Input placeholder={t('Введите СНИЛС')} size='large' />
          </Form.Item>
        </div>

        <div className={styles.inputsWrapper}>
          <Form.Item
            className={styles.input}
            label={t('Дата рождения')}
            name='birthday'
            rules={[{ required: true }]}
          >
            <DatePicker
              placeholder={t('Введите дату рождения')}
              className={styles.input}
              size='large'
            />
          </Form.Item>

          <Form.Item
            className={styles.input}
            label={t('Контактный телефон')}
            name='phone'
            rules={[{ required: true }]}
          >
            <Input placeholder={t('Введите контактный телефон')} size='large' />
          </Form.Item>
        </div>

        <Form.Item
          label={t('Место рождения')}
          name='birthPlace'
          rules={[{ required: true }]}
        >
          <Input placeholder={t('Введите место рождения')} size='large' />
        </Form.Item>

        <Form.Item
          label={t('Адрес места жительства')}
          name='address'
          rules={[{ required: true }]}
        >
          <Input
            placeholder={t('Введите адрес места жительства')}
            size='large'
          />
        </Form.Item>

        <Form.Item
          name='isMailingAddressEqualsAddress'
          label={t('')}
          valuePropName='checked'
          rules={[{ required: true }]}
        >
          <Checkbox>{t('Почтовый адрес совпадает с юридическим')}</Checkbox>
        </Form.Item>

        <Title level={5}>{t('Паспортные данные')}</Title>

        <div className={styles.inputsWrapper}>
          <Form.Item
            className={styles.input}
            label={t('Серия')}
            name='passportSeries'
            rules={[{ required: true }]}
          >
            <Input placeholder={t('Введите серию')} size='large' />
          </Form.Item>

          <Form.Item
            className={styles.input}
            label={t('Номер')}
            name='passportNumber'
            rules={[{ required: true }]}
          >
            <Input placeholder={t('Введите номер')} size='large' />
          </Form.Item>
        </div>

        <div className={styles.inputsWrapper}>
          <Form.Item
            className={styles.input}
            label={t('Дата выдачи')}
            name='passportDate'
            rules={[{ required: true }]}
          >
            <DatePicker
              placeholder={t('Введите дату выдачи')}
              className={styles.input}
              size='large'
            />
          </Form.Item>

          <Form.Item
            className={styles.input}
            label={t('Код подразделения')}
            name='passportCode'
            rules={[{ required: true }]}
          >
            <Input placeholder={t('Введите код подразделения')} size='large' />
          </Form.Item>
        </div>

        <Form.Item
          className={styles.input}
          label={t('Кем выдан')}
          name='passportOrgan'
          rules={[{ required: true }]}
        >
          <Input placeholder={t('Введите наименование органа')} size='large' />
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
