import React, { FC } from 'react';
import styles from './arrow.module.css';
import ArrowIcon from 'assets/icons/arrow-down.svg';
import classNames from 'classnames';

type TArrowProps = {
  onClick?: () => void;
};

const Arrow: FC<TArrowProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={styles.iconWrapper}>
      <ArrowIcon className={classNames([styles.icon])} />
    </div>
  );
};

export default Arrow;
