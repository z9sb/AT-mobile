import React from 'react';
import styles from './ProductDetails.module.css';

export default class ProductDetails extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <section className={styles.productDetails}>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Preço: R${product.price}</p>
        <p>Nota: {product.rating}/5</p>
      </section>
    );
  }
}

