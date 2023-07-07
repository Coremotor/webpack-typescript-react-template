import React, { useEffect, useState } from 'react';
import { Checkbox, Form, Button } from 'modules/_shared/ui';
import styles from './accounting-documents-form.module.css';
import { TAccountingDocumentsForm } from 'modules/document-flow/types';

const formFields = [
  { name: 'acts', label: 'Акты' },
  { name: 'reports', label: 'Отчеты' },
  { name: 'invoices', label: 'Счета фактуры' },
  { name: 'registries', label: 'Реестры' },
];

const init = {
  acts: true,
  reports: false,
  invoices: false,
  registries: false,
};

export const AccountingDocumentsForm = () => {
  const [form] = Form.useForm<TAccountingDocumentsForm>();
  const [submittable, setSubmittable] = useState(false);

  const values = Form.useWatch([], form);

  const onFinish = (values: TAccountingDocumentsForm) => {
    console.log('Success:', values);
  };

  useEffect(() => {
    if (values) {
      const valuesArray = Object.values(values);
      setSubmittable(valuesArray.some((value) => value === true));
    }
  }, [values]);

  return (
    <Form
      className={styles.form}
      name='print'
      form={form}
      onFinish={onFinish}
      initialValues={init}
    >
      {formFields.map((field) => (
        <Form.Item
          noStyle
          key={field.name}
          name={field.name}
          valuePropName='checked'
        >
          <Checkbox className={styles.formItem}>{field.label}</Checkbox>
        </Form.Item>
      ))}

      <Button disabled={!submittable} block type='primary' htmlType='submit'>
        Напечатать
      </Button>
    </Form>
  );
};
