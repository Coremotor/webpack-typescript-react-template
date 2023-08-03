import React from 'react';
import { RangePicker, Text, Popover, Select, Space } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import ArrowIcon from 'assets/icons/arrow-down.svg';
import styles from './date-range-filter.module.css';

const dateRangesOptions = [
  { value: 'Настраиваемый', label: 'Настраиваемый' },
  { value: 'Последние три дня', label: 'Последние три дня' },
  { value: 'За неделю', label: 'За неделю' },
  { value: 'За месяц', label: 'За месяц' },
  { value: 'За три месяца', label: 'За три месяца' },
];

export const DateRangeFilter = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.value}>
        <Text type='secondary'>{t('Дата')}: </Text>
        <Text>22.00.2020-23.00.2022</Text>
      </div>
      <Popover
        trigger='click'
        arrow={false}
        placement='bottom'
        content={
          <Space direction='vertical'>
            <Text>{t('Диапазон дат')}</Text>
            <Select
              className={styles.select}
              options={dateRangesOptions}
              defaultValue={dateRangesOptions[0]}
            />
            <Text>{t('Даты начали и окончания')}</Text>
            <RangePicker />
            <div className={styles.buttons}>
              <Button>{t('Отменить')}</Button>
              <Button type='primary'>{t('Применить')}</Button>
            </div>
          </Space>
        }
      >
        <div className={styles.iconWrapper}>
          <ArrowIcon className={styles.icon} />
        </div>
      </Popover>
    </div>
  );
};
