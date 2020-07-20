import React from "react";
import styles from "./productCard.module.scss";
import ProductBox from "../productBox/productBox";
import ProductNav from '../../common/productNav/productNav';

const ProductCard = () => {
  return (
    <section className={styles.ourProduct} id='homeProduct'>
    <h3 className={styles.title}>Nasze produkty</h3>
    <p className={styles.description}>Tworzone z pasją i doświadczeniem</p>
<ProductNav/>
<div className={styles.productSection}>
  <div className={styles.publicity}>
    <div className={styles.banner}>
      <ProductBox width="100%" />
      <ProductBox width="100%" />
    </div>
  </div>
  <div className={styles.productCard}>
    <ProductBox />
    <ProductBox />
    <ProductBox />
    <ProductBox />
    <ProductBox />
    <ProductBox />
    <ProductBox />
    <ProductBox />
  </div>
</div>
  </section>
  );
};


export default ProductCard;
