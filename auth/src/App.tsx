import React, { useEffect } from 'react';

import { Button, DatePicker } from 'antd';

import assets from './img.png';
import styles from './styles.scss';

const delay = () =>
  new Promise((res) => {
    setTimeout(res, 300);
  });

export const App = () => {
  const obj = {};

  Object.assign(obj, {
    log: 'log',
  });

  console.log(obj);

  const fetch = async () => {
    delay().then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className={styles.root}>
      <h2>Auth</h2>
      <DatePicker />
      <Button>Hello world</Button>
      <img src={assets} alt="" />
    </div>
  );
};
