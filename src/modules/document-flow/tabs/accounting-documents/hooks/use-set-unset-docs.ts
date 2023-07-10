import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useAppDispatch, useAppSelector } from 'modules/_shared/store/hooks';
import { TAccountingDocument } from 'modules/document-flow/types';
import { getSelectedAccountingDocuments } from 'modules/document-flow/store/selectors';
import { setSelectedAccountingDocuments } from 'modules/document-flow/store/reduser';

export const useSetUnsetDocs = (doc: TAccountingDocument) => {
  const dispatch = useAppDispatch();
  const selectedDocs = useAppSelector(getSelectedAccountingDocuments);

  const setUnsetDoc = (event: CheckboxChangeEvent) => {
    if (event.target.checked) {
      dispatch(setSelectedAccountingDocuments([...selectedDocs, doc]));
    } else {
      dispatch(
        setSelectedAccountingDocuments(
          selectedDocs.filter((selectedDoc) => selectedDoc.id !== doc.id),
        ),
      );
    }
  };

  const checked = selectedDocs.includes(doc);

  return { setUnsetDoc, checked };
};
