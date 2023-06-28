import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { getDirection } from 'store/modules/app/selectors';
import { setDirection } from 'store/modules/app/reduser';

const DirectionSwitcher = () => {
  const dispatch = useDispatch();
  const direction = useSelector(getDirection);
  const toggleDirection = () =>
    dispatch(setDirection(direction === 'rtl' ? 'ltr' : 'rtl'));
  return (
    <Button onClick={toggleDirection}>
      {direction === 'rtl' ? 'ltr' : 'rtl'}
    </Button>
  );
};

export default DirectionSwitcher;
