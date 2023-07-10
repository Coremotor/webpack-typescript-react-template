import { useNavigate } from 'react-router-dom';
import { Form } from 'modules/_shared/ui';
import { RoutesEnum } from 'modules/_shared/router/routes';
import { setEmailForConfirm } from 'modules/registration/store/reduser';
import { TRegistrationFormFields } from 'modules/registration/types';
import { useAppDispatch } from 'modules/_shared/store/hooks';

export const useRegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [form] = Form.useForm<TRegistrationFormFields>();
  const onFinish = (values: TRegistrationFormFields) => {
    console.log(values);
    navigate(RoutesEnum.emailConfirmation);
    dispatch(setEmailForConfirm(values.email));
  };

  return { form, onFinish };
};
