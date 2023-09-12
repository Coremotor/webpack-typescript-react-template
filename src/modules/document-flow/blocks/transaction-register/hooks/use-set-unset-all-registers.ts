import {
  useAppDispatch,
  useAppSelector,
} from 'modules/_shared/root-store/hooks';
import {
  getSelectedTransactionRegisters,
  getTransactionRegisters,
} from 'modules/document-flow/store/selectors';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { setSelectedTransactionRegisters } from 'modules/document-flow/store/reducer';

export const useSetUnsetAllRegisters = () => {
  const allRegisters = useAppSelector(getTransactionRegisters);
  const selectedRegisters = useAppSelector(getSelectedTransactionRegisters);
  const dispatch = useAppDispatch();

  const checked =
    selectedRegisters.length > 0 &&
    allRegisters.length === selectedRegisters.length;

  const setUnsetAllRegisters = (event: CheckboxChangeEvent) => {
    if (event.target.checked) {
      dispatch(setSelectedTransactionRegisters(allRegisters));
    } else {
      dispatch(setSelectedTransactionRegisters([]));
    }
  };

  return { setUnsetAllRegisters, checked };
};
