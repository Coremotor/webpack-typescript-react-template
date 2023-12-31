import React from 'react';
import { Button, Form, Input } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';
import { useRegistrationForm } from 'modules/registration/hooks/use-registration-form';
import styles from './registration-form.module.css';

export const RegistrationForm = () => {
  const { t } = useTranslation();
  const { form, onFinish } = useRegistrationForm();

  return (
    <Form
      layout='vertical'
      form={form}
      name='registration'
      onFinish={onFinish}
      requiredMark={false}
    >
      <Form.Item
        label={t('registration.emailInputLabel')}
        name='email'
        rules={[
          {
            type: 'email',
          },
          {
            required: true,
          },
        ]}
      >
        <Input placeholder='name@company.com' size='large' />
      </Form.Item>

      <Form.Item
        label={t('registration.passwordInputLabel')}
        name='password'
        rules={[{ required: true }]}
      >
        <Input.Password
          placeholder={t('registration.placeholderPassword')}
          size='large'
        />
      </Form.Item>

      <Form.Item
        label={t('registration.repeatPasswordInputLabel')}
        name='repeatPassword'
        rules={[
          { required: true },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error(t('registration.passwordNotMatch')),
              );
            },
          }),
        ]}
      >
        <Input.Password
          placeholder={t('registration.placeholderPassword')}
          size='large'
        />
      </Form.Item>

      <Button
        size='large'
        className={styles.button}
        type='primary'
        htmlType='submit'
        block
      >
        {t('registration.button')}
      </Button>
    </Form>
  );
};
