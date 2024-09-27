import React from 'react';
import styles from './Header.module.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <h1>E-Commerce</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">Produtos</a>
          <a href="#">Contatos</a>
        </nav>
      </header>
    );
  }
}
