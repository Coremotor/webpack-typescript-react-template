import { Form } from 'modules/_shared/ui';
import { TEmailConfirmationFormFields } from 'modules/email-confirmation/types';
import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from 'modules/_shared/router/routes';
import { setIsAuth } from 'modules/authorization/store/reducer';
import { useAppDispatch } from 'modules/_shared/root-store/hooks';

export const useEmailConfirmationForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm<TEmailConfirmationFormFields>();
  const codeValue = Form.useWatch('code', form);
  const conditionsChecked = Form.useWatch('conditions', form);

  const onFinish = (values: TEmailConfirmationFormFields) => {
    console.log(values);
    dispatch(setIsAuth(true));
    navigate(RoutesEnum.mainScreen);
  };

  const isButtonDisabled = !(codeValue && conditionsChecked);

  return { form, onFinish, isButtonDisabled };
};
