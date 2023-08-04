import {
  useAppDispatch,
  useAppSelector,
} from 'modules/_shared/root-store/hooks';
import { getCompany } from 'modules/company/store/selectors';
import { App } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Form } from 'modules/_shared/ui';
import { RoutesEnum } from 'modules/_shared/router/routes';
import { useEffect } from 'react';
import { setCompany } from 'modules/company/store/reducer';
import { companyData } from 'modules/_shared/mock-data/company-data';

type TFormFields = {
  mailingAddress: string;
  phone: string;
};
export const useCompanyEdit = () => {
  const dispatch = useAppDispatch();
  const company = useAppSelector(getCompany);
  const { notification } = App.useApp();
  const navigate = useNavigate();

  const [form] = Form.useForm<TFormFields>();
  const onFinish = (values: TFormFields) => {
    console.log(values);
    notification.open({
      type: 'success',
      message: 'Контакты',
      description: 'Изменения успешно сохранены',
    });
    navigate(RoutesEnum.Company);
  };

  useEffect(() => {
    console.log('Load company DTO');
    dispatch(setCompany(companyData));
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      mailingAddress: company?.contacts.mailingAddress,
      phone: company?.contacts.phone,
    });
  }, [company]);

  return { onFinish, form };
};
