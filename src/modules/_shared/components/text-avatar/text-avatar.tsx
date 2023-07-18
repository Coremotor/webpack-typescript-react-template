import React, { FC } from 'react';
import styles from './text-avatar.module.css';

type TTextAvatarProps = {
  str: string;
};

export const TextAvatar: FC<TTextAvatarProps> = ({ str }) => {
  return <div className={styles.avatar}>{str}</div>;
};
