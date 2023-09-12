import React from 'react';
import { Text, Select } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';
import ArrowIcon from 'assets/icons/arrow-down.svg';
import styles from './accounts-contracts-filter.module.css';

const contractsOptions = [
  { value: 'Все', label: 'Все' },
  { value: '*000600/5387115684', label: '*000600/5387115684' },
  { value: '*000800/5387115154', label: '*000800/5387115154' },
  { value: '*000900/5387941154', label: '*000900/5387941154' },
  { value: '*000100/1137115154', label: '*000100/1137115154' },
];

export const AccountsContractsFilter = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Text ellipsis type='secondary'>
        {t('paymentTransactions.filters.accountsContracts')}:{' '}
      </Text>
      <Select
        popupClassName={styles.select}
        suffixIcon={<ArrowIcon className={styles.icon} />}
        bordered={false}
        options={contractsOptions}
        defaultValue={contractsOptions[0]}
      />
    </div>
  );
};
