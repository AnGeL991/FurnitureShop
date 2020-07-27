import React from "react";
import styles from "./productCard.module.scss";
import ProductBox from "../productBox/productBox";
import ProductNav from '../../common/productNav/productNav';
import PublicitySlider from "../publicitySlider/publicitySlider";

const ProductCard = () => {
  return (
    <section className={styles.ourProduct} id='homeProduct'>
    <h3 className={styles.title}>Nasze produkty</h3>
    <p className={styles.description}>Tworzone z pasją i doświadczeniem</p>
<ProductNav/>
<div className={styles.productSection}>
  <div className={styles.publicity}>
    <PublicitySlider amount='1' radius='none' shadow='yes'/>
    <PublicitySlider amount='1' radius='none' shadow='yes'/>
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
