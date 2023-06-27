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
      subTitle='Sorry, the page you visited does not exist.'
      extra={
        <Button type='primary' onClick={goToMainPage}>
          Back Home
        </Button>
      }
    />
  );
};

export default NoFound;
