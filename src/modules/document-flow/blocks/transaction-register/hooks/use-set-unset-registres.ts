import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import {
  useAppDispatch,
  useAppSelector,
} from 'modules/_shared/root-store/hooks';
import { TTransactionRegister } from 'modules/document-flow/types';
import {
  getActiveTransactionRegister,
  getSelectedTransactionRegisters,
} from 'modules/document-flow/store/selectors';
import {
  setActiveTransactionRegister,
  setSelectedTransactionRegisters,
} from 'modules/document-flow/store/reducer';

export const useSetUnsetRegisters = (register: TTransactionRegister) => {
  const dispatch = useAppDispatch();
  const selectedRegisters = useAppSelector(getSelectedTransactionRegisters);

  const activeRegister = useAppSelector(getActiveTransactionRegister);
  const setActiveRegister = () =>
    dispatch(setActiveTransactionRegister(register));

  const setUnsetRegisters = (event: CheckboxChangeEvent) => {
    if (event.target.checked) {
      dispatch(
        setSelectedTransactionRegisters([...selectedRegisters, register]),
      );
    } else {
      dispatch(
        setSelectedTransactionRegisters(
          selectedRegisters.filter(
            (selectedRegister) => selectedRegister.id !== register.id,
          ),
        ),
      );
    }
  };

  const checked = selectedRegisters.includes(register);
  const isActive = activeRegister && activeRegister.id === register.id;

  return { setUnsetRegisters, checked, setActiveRegister, isActive };
};
