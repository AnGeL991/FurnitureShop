import React from "react";
import styles from "./shop.module.scss";
import Header from "../../common/headerTitle/header";
import Container from "../../layout/container/container";
import CategoryProduct from '../../features/categoryProduct/categoryProduct';
import ProductCardShop from "../../features/productCardShop/productCardShopContainer";

const Shop = () => (
  <section id="shop" className={styles.page}>
    <Header
      fontSize="34px"
      textAlign="left"
      fontWeight="500"
      margin="20px 140px "
    >
      Sklep
    </Header>
    <section id="sideMain" className={styles.sideMain}>
      <Container>
        <section className={styles.shopCard}>
          <CategoryProduct/>
          <ProductCardShop/>
        </section>
      </Container>
    </section>
  </section>
);

export default Shop;
