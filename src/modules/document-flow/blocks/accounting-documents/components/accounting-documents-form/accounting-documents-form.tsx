import React, { useEffect, useState } from 'react';
import { Checkbox, Form, Button } from 'modules/_shared/ui';
import { TAccountingDocumentsForm } from 'modules/document-flow/types';
import styles from './accounting-documents-form.module.css';
import { useAccountingDocumentsFormFields } from 'modules/document-flow/blocks/accounting-documents/hooks/use-accounting-documents-form-fields';

export const AccountingDocumentsForm = () => {
  const [form] = Form.useForm<TAccountingDocumentsForm>();
  const { formFields, initialValues } = useAccountingDocumentsFormFields();

  const values = Form.useWatch([], form);
  const [submittable, setSubmittable] = useState(false);

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
      initialValues={initialValues}
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
