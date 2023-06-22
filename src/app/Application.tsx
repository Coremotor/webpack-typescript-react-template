import React, { useEffect, useState } from 'react';

import iconReact from '../assets/icons/react.png';
import iconTypescript from '../assets/icons/typescript.png';
import iconWebpack from '../assets/icons/webpack.png';

import styles from './application.module.css';

const Application: React.FC = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const toggleTheme = () => {
    setDarkTheme((prevState) => !prevState);
  };

  useEffect(() => {
    const useDarkTheme = parseInt(localStorage.getItem('dark-mode'));
    if (isNaN(useDarkTheme)) {
      setDarkTheme(true);
    } else if (useDarkTheme === 1) {
      setDarkTheme(true);
    } else if (useDarkTheme === 0) {
      setDarkTheme(false);
    }
  }, []);

  useEffect(() => {
    if (darkTheme) {
      localStorage.setItem('dark-mode', '1');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('dark-mode', '0');
      document.body.classList.remove('dark-mode');
    }
  }, [darkTheme]);

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
      {/* <Test /> */}
    </div>
  );
};

export default Application;
