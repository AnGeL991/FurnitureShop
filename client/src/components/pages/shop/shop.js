import React from "react";
import styles from "./shop.module.scss";
import Header from "../../common/headerTitle/header";
import Container from "../../layout/container/container";
import CategoryProduct from '../../features/categoryProduct/categoryProductContainer';
import ProductCardShop from "../../features/productCardShop/productCardShopContainer";

const Shop = () => (
  <section id="shop" className="page">
    <Header
      fontSize="34px"
      textAlign="left"
      fontWeight="300"
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
