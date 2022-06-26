import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <h1 className={styles.root}>
      {/* SCC модуль подключаем*/}
      <span>😕</span>
      <br />
      <h1> Ничего не найдено </h1>
    </h1>
  );
};
export default NotFoundBlock;
