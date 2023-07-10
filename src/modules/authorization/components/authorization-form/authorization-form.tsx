import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Form, Input } from 'modules/_shared/ui';
import styles from './authorization-form.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { RoutesEnum } from 'modules/_shared/router/routes';
import { TAuthorizationFormFields } from 'modules/authorization/types';
import { setIsAuth } from 'modules/authorization/store/reduser';
import { useAppDispatch } from 'modules/_shared/store/hooks';

export const AuthorizationForm = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [form] = Form.useForm<TAuthorizationFormFields>();
  const onFinish = (values: TAuthorizationFormFields) => {
    console.log(values);
    dispatch(setIsAuth(true));
    navigate(RoutesEnum.mainScreen);
  };

  return (
    <Form
      className={styles.form}
      layout='vertical'
      form={form}
      name='authorization'
      onFinish={onFinish}
      requiredMark={false}
    >
      <Form.Item
        label={t('authorization.emailInputLabel')}
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
        className={styles.passwordInputWrapper}
        label={t('authorization.passwordInputLabel')}
        name='password'
        rules={[{ required: true }]}
      >
        <Input.Password
          placeholder={t('registration.placeholderPassword')}
          size='large'
        />
      </Form.Item>

      <Link className={styles.link} to={RoutesEnum.authorization}>
        {t('authorization.forgotYourPassword')}
      </Link>

      <Button
        size='large'
        className={styles.button}
        type='primary'
        htmlType='submit'
        block
      >
        {t('authorization.button')}
      </Button>
    </Form>
  );
};
