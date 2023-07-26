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
            title: <Link to={RoutesEnum.company}>{t('Руководство')}</Link>,
          },
          {
            title: managerId
              ? t('Редактирование руководства')
              : t('Добавление руководства'),
          },
        ]}
      />

      <Title level={4}>
        {managerId
          ? t('Редактирование руководства')
          : t('Добавление руководства')}
      </Title>

      <Title level={5}>{t('Основная информация')}</Title>

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
          label={t('Должность')}
          name='position'
          rules={[{ required: true }]}
        >
          <Input placeholder={t('Введите должность')} size='large' />
        </Form.Item>

        <Form.Item
          label={t('Действует на основании')}
          name='act'
          rules={[{ required: true }]}
        >
          <Select
            size='large'
            placeholder={t('Выберите документ')}
            options={actOptions}
          />
        </Form.Item>

        <Form.Item
          label={t('ФИО для подписи в документах')}
          name='fullNameForDocs'
          rules={[{ required: true }]}
        >
          <Input placeholder={t('Введите ФИО')} size='large' />
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
