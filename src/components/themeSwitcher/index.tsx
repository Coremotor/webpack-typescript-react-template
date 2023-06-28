import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { getIsDarkMode } from 'store/modules/app/selectors';
import { setIsDarkMode } from 'store/modules/app/reduser';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(getIsDarkMode);
  const toggleTheme = () => dispatch(setIsDarkMode(!isDarkMode));
  return (
    <Button onClick={toggleTheme}>{isDarkMode ? 'Light' : 'Dark'} theme</Button>
  );
};

export default ThemeSwitcher;
