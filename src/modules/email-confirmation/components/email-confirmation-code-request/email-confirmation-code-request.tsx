import React from 'react';
import { useTimer } from 'modules/_shared/hooks/use-timer';
import { Link, Text, Space } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';
import { INIT_TIMER_VALUE_IN_SECONDS } from 'modules/email-confirmation/constants/init-timer-value-in-seconds';
import styles from './email-confirmation-code-request.module.css';

export const EmailConfirmationCodeRequest = () => {
  const { t } = useTranslation();
  const { seconds, timer, restartTimer } = useTimer(
    INIT_TIMER_VALUE_IN_SECONDS,
  );

  return (
    <Space.Compact className={styles.wrapper}>
      {timer ? (
        <Text strong type='secondary'>
          {`${t('emailConfirmation.codeRequest')} ${seconds} сек.`}
        </Text>
      ) : (
        <Link onClick={restartTimer} strong>
          {t('emailConfirmation.sendCode')}
        </Link>
      )}
    </Space.Compact>
  );
};
