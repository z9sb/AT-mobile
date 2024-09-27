import React from "react";
import styles from "./RelatedProducts.module.css";

export default class RelatedProducts extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <section className={styles.relatedProducts}>
        <h3>Produtos relacionados</h3>
        <div className={styles.productList}>
          {products.map((product, index) => (
            <div key={index} className={styles.product}>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>R$: {product.price}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
