import React from 'react';
import styles from './backdrop.module.css';

const Backdrop = props => {
  return <div className={styles['backdrop']} onClick={props.onClick}></div>;
};

export default Backdrop;
