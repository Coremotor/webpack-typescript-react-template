import React from 'react';
import { Button, Result } from 'modules/_shared/ui';
import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from 'modules/_shared/router/routes';
import styles from 'modules/no-found/no-found.module.css';

export const NoFound = () => {
  const navigate = useNavigate();
  const goToMainPage = () => navigate(RoutesEnum.mainScreen);
  return (
    <Result
      className={styles.noFound}
      status='404'
      title='404'
      subTitle='Извините, страница, которую вы посетили, не существует.'
      extra={
        <Button type='primary' onClick={goToMainPage}>
          Перейит на главную
        </Button>
      }
    />
  );
};

export default NoFound;
