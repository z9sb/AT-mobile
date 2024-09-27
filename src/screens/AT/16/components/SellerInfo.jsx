import React from "react";
import styles from "./SellerInfo.module.css";

export default class SellerInfo extends React.Component {
  render() {
    const { seller } = this.props;
    return (
      <section className={styles.sellerInfo}>
        <h3>Informações do vendedor</h3>
        <p>Nome: {seller.name}</p>
        <p>Email: {seller.email}</p>
        <p>Telefone: {seller.phone}</p>
        <p>Nota: {seller.rating}/5</p>
      </section>
    );
  }
}
