import React from 'react';
import styles from './loader.module.css';
import { Spin } from 'antd';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Spin size='large' />
    </div>
  );
};

export default Loader;
