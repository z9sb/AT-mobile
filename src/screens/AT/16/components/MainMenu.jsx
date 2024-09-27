import React from 'react';
import styles from './MainMenu.module.css';

export default class MainMenu extends React.Component {
  render() {
    return (
      <aside className={styles.menu}>
        <ul>
          <li><a href="#electronics">Electronics</a></li>
          <li><a href="#fashion">Fashion</a></li>
          <li><a href="#home">Home & Living</a></li>
        </ul>
      </aside>
    );
  }
}
