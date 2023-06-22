import React from 'react';
import { useTheme } from 'hooks/useTheme';
import iconReact from 'assets/icons/react.png';
import iconTypescript from 'assets/icons/typescript.png';
import iconWebpack from 'assets/icons/webpack.png';
import Test from 'components/test';
import styles from './application.module.css';

const Application: React.FC = () => {
  const { darkTheme, toggleTheme } = useTheme();

  return (
    <div className={styles.container}>
      <div className={styles.images_wrapper}>
        <img src={iconReact} alt='icon' />
        <img src={iconWebpack} alt='icon' />
        <img src={iconTypescript} alt='icon' />
      </div>
      <div className={styles.text}>React Webpack TS Boilerplate</div>
      <button className={styles.button} onClick={toggleTheme}>
        {darkTheme ? 'Light Theme' : 'Dark Theme'}
      </button>
      <Test text='Another component' />
    </div>
  );
};

export default Application;
