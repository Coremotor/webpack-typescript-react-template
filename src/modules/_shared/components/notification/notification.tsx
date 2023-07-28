import React from 'react';
import { getError } from 'modules/_shared/app-store/selectors';
import { setError } from 'modules/_shared/app-store/reducer';
import { createPortal } from 'react-dom';
import { Card } from 'modules/_shared/ui';
import styles from 'modules/_shared/components/notification/notification.module.css';
import {
  useAppDispatch,
  useAppSelector,
} from 'modules/_shared/root-store/hooks';

export const Notification = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector(getError);
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
