import React from 'react';
import styles from './side-drawer.module.css';
import { CSSTransition } from 'react-transition-group';

const sideDrawer = props => {
  return (
    <CSSTransition in={props.show} timeout={400} classNames={'slide-in-right'} mountOnEnter unmountOnExit>
      <aside className={styles['side-drawer']} onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );
};

export default sideDrawer;
