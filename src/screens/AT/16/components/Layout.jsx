import React from 'react';
import Header from './Header';
import MainMenu from './MainMenu';
import styles from './Layout.module.css';

export default class Layout extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <MainMenu />
        <main className={styles.mainContent}>{this.props.children}</main>
      </div>
    );
  }
}

