import React from 'react';
import { Button, Form, Input } from 'antd';
import styles from 'modules/registration/registration.module.css';

interface RegistrationFormFields {
  email: string;
  password: string;
  repeatPassword: string;
}

const Registration = () => {
  const [form] = Form.useForm<RegistrationFormFields>();
  const onFinish = (values: RegistrationFormFields) => {
    console.log('Success:', values);
  };

  return (
    <div className={styles.container}>
      <Form
        className={styles.form}
        layout='vertical'
        form={form}
        name='registration'
        onFinish={onFinish}
        requiredMark={false}
      >
        <Form.Item
          label='Ваш email'
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
          <Input />
        </Form.Item>

        <Form.Item
          label='Ваш пароль'
          name='password'
          rules={[{ required: true }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label='Повторите пароль'
          name='repeatPassword'
          rules={[{ required: true }]}
        >
          <Input.Password />
        </Form.Item>

        <Button type='primary' htmlType='submit' block>
          Продолжить
        </Button>
      </Form>
    </div>
  );
};

export default Registration;
