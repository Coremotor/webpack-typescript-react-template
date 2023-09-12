import React, { FC } from 'react';
import styles from './text-avatar.module.css';

type TTextAvatarProps = {
  str: string;
  width?: number;
  height?: number;
};

export const TextAvatar: FC<TTextAvatarProps> = ({
  str,
  width = 48,
  height = 48,
}) => {
  return (
    <div className={styles.avatar} style={{ width, height }}>
      {str}
    </div>
  );
};
