import React from 'react';
import Link from 'next/link';
import styles from './logo.module.css';

const logo = ({ name }) => {
  return (
    <div className={styles['logo-container']}>
      <Link href='/'>
        <img src='/images/J2V-Logo-1.svg' className={styles['header-image']} alt={name || 'Journey To Valley'} />
      </Link>
      <span className={styles['logo-text']} id={styles['journey']}>
        Journey
      </span>
      <span className={styles['logo-text']} id={styles['to-valley']}>
        to Valley
      </span>
    </div>
  );
};

export default logo;
