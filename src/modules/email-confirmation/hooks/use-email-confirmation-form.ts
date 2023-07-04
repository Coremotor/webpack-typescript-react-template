import { Form } from 'modules/_shared/ui';
import { TEmailConfirmationFormFields } from 'modules/email-confirmation/types';

export const useEmailConfirmationForm = () => {
  const [form] = Form.useForm<TEmailConfirmationFormFields>();
  const codeValue = Form.useWatch('code', form);
  const conditionsChecked = Form.useWatch('conditions', form);

  const onFinish = (values: TEmailConfirmationFormFields) => {
    console.log(values);
  };

  const isButtonDisabled = !(codeValue && conditionsChecked);

  return { form, onFinish, isButtonDisabled };
};
