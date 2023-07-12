import React from 'react';
import { Button } from 'antd';
import { getDirection } from 'modules/_shared/store/global/selectors';
import { setDirection } from 'modules/_shared/store/global/reduser';
import { useAppDispatch, useAppSelector } from 'modules/_shared/store/hooks';

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
