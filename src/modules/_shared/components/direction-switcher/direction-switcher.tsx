import React from 'react';
import { Button } from 'modules/_shared/ui';
import { getDirection } from 'modules/_shared/app-store/selectors';
import { setDirection } from 'modules/_shared/app-store/reducer';
import {
  useAppDispatch,
  useAppSelector,
} from 'modules/_shared/root-store/hooks';

export const DirectionSwitcher = () => {
  const dispatch = useAppDispatch();
  const direction = useAppSelector(getDirection);
  const toggleDirection = () =>
    dispatch(setDirection(direction === 'rtl' ? 'ltr' : 'rtl'));
  return (
    <Button onClick={toggleDirection}>
      {direction === 'rtl' ? 'ltr' : 'rtl'}
    </Button>
  );
};
