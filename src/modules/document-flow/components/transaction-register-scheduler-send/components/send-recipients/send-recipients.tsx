import React, { useEffect, useState } from 'react';
import { Select } from 'modules/_shared/ui';
import type { SelectProps } from 'antd';
import { useTranslation } from 'react-i18next';
import styles from './send-recipients.module.css';

const persons: SelectProps['options'] = [
  { value: 'id1', label: 'Зайцев Герман' },
  { value: 'id2', label: 'Гусев Дмитрий' },
  { value: 'id3', label: 'Игнатов Севастьян' },
  { value: 'id4', label: 'Самсонова Герда' },
  { value: 'id5', label: 'Комарова Сафина' },
];

export const SendRecipients = () => {
  const [options, setOptions] = useState<SelectProps['options']>([]);
  const { t } = useTranslation();
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  useEffect(() => {
    setOptions(persons);
  }, [persons]);

  return (
    <Select
      className={styles.select}
      mode='multiple'
      allowClear
      placeholder={t('documentFlow.selectPlaceholder')}
      onChange={handleChange}
      options={options}
      showSearch
      filterOption={(input, option) =>
        ((option?.label as string) ?? '')
          .toLowerCase()
          .includes(input.toLowerCase())
      }
    />
  );
};
