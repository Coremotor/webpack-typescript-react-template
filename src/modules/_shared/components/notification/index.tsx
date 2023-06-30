import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getError } from 'modules/_shared/app/store/app/selectors';
import { setError } from 'modules/_shared/app/store/app/reduser';
import { createPortal } from 'react-dom';
import { Card } from 'antd';
import styles from 'modules/_shared/components/notification/notification.module.css';

const Notification = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const onNotificationClick = () => dispatch(setError(null));

  return (
    <>
      {error &&
        createPortal(
          <Card onClick={onNotificationClick} className={styles.error}>
            {error}
          </Card>,
          document.body,
        )}
    </>
  );
};

export default Notification;
