import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { routes } from 'router/routes';
import styles from './noFound.module.css';

const NoFound = () => {
  const navigate = useNavigate();
  const goToMainPage = () => navigate(routes.main);
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
