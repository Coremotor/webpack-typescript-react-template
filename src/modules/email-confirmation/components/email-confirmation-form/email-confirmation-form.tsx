import React from 'react';
import { Button, Form, Input, Space, Checkbox, Link } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';
import { useEmailConfirmationForm } from 'modules/email-confirmation/hooks/use-email-confirmation-form';
import styles from './email-confirmation-form.module.css';

export const EmailConfirmationForm = () => {
  const { t } = useTranslation();
  const { form, onFinish, isButtonDisabled } = useEmailConfirmationForm();

  return (
    <Form
      className={styles.form}
      layout='vertical'
      form={form}
      name='emailConfirmation'
      onFinish={onFinish}
      requiredMark={false}
    >
      <Form.Item name='code' rules={[{ required: true }]}>
        <Input
          placeholder={t('emailConfirmation.placeholderInputCode')}
          size='large'
        />
      </Form.Item>

      <Space.Compact className={styles.wrapper}>
        <Form.Item noStyle name='conditions' valuePropName='checked'>
          <Checkbox className={styles.conditions}>
            {t('emailConfirmation.conditions')}
          </Checkbox>
        </Form.Item>
        <Link className={styles.link} underline>
          {t('emailConfirmation.link')}
        </Link>
      </Space.Compact>

      <Button
        disabled={isButtonDisabled}
        size='large'
        className={styles.button}
        type='primary'
        htmlType='submit'
        block
      >
        {t('emailConfirmation.button')}
      </Button>
    </Form>
  );
};
