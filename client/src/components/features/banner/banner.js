import React from "react";
import styles from "./banner.module.scss";
import { NavLink } from "react-router-dom";
import Header from "../../common/headerTitle/header";

const Banner = () => (
  <section id="homeBanner">
    <Header fontWeight='300' >Zaprojektuj z nami swoje wnętrze</Header>
    <div className={styles.contentBox}>
      <div className={styles.bannerFirst}>
        <h3 className={styles.subtitle}>Indywidualne projekty</h3>
        <p className={styles.description}>Sprawdz co potrafimy</p>
        <button className={styles.btn}>
          <NavLink to="/shop">Sprawdz sam</NavLink>
        </button>
      </div>
      <div className={styles.bannerSecond}>
        <h3 className={styles.subtitle}>Odwiedź nasz sklep</h3>
        <p className={styles.description}>Wybierz cos dla siebie</p>
        <button className={styles.btn}>
          <NavLink to="/shop">Sprawdz sam</NavLink>
        </button>
      </div>
    </div>
  </section>
);

export default Banner;
