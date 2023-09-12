import { useTranslation } from 'react-i18next';

export const useAccountingDocumentsFormFields = () => {
  const { t } = useTranslation();

  const initialValues = {
    acts: true,
    reports: false,
    invoices: false,
    registries: false,
  };

  const formFields = [
    { name: 'acts', label: t('documentFlow.acts') },
    { name: 'reports', label: t('documentFlow.reports') },
    { name: 'invoices', label: t('documentFlow.invoices') },
    { name: 'registries', label: t('documentFlow.registries') },
  ];

  return { formFields, initialValues };
};
