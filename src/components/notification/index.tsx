import React from 'react';
import styles from 'components/notification/notification.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getError } from 'store/modules/app/selectors';
import { setError } from 'store/modules/app/reduser';

const Notification = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);

  return (
    <>
      {error && (
        <div onClick={() => dispatch(setError(null))} className={styles.error}>
          {error}
        </div>
      )}
    </>
  );
};

export default Notification;
