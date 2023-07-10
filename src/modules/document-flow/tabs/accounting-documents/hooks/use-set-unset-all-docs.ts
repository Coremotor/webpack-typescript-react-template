import { useAppDispatch, useAppSelector } from 'modules/_shared/store/hooks';
import {
  getAccountingDocuments,
  getSelectedAccountingDocuments,
} from 'modules/document-flow/store/selectors';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { setSelectedAccountingDocuments } from 'modules/document-flow/store/reduser';

export const useSetUnsetAllDocs = () => {
  const allDocs = useAppSelector(getAccountingDocuments);
  const selectedDocs = useAppSelector(getSelectedAccountingDocuments);
  const dispatch = useAppDispatch();

  const checked = allDocs.length === selectedDocs.length;

  const setUnsetAllDocs = (event: CheckboxChangeEvent) => {
    if (event.target.checked) {
      dispatch(setSelectedAccountingDocuments(allDocs));
    } else {
      dispatch(setSelectedAccountingDocuments([]));
    }
  };

  return { setUnsetAllDocs, checked };
};
