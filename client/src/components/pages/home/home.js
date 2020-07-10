import React from "react";
import styles from "./home.module.scss";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section id="homePage">
      <header className={styles.title}>
        <h3>Zaprojektuj z nami swoje wnętrze</h3>
      </header>
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
      <header>
          <h3 className={styles.title}>Cos dla ciebie</h3>
        </header>
      <div className={styles.works}>
        <div className={styles.eachWork}>
          <img src="/image/work.jpg" alt="logoCompany" />
          <h3 className={styles.subtitle}>test</h3>
        </div>
        <div className={styles.eachWork}>
          <img src="/image/work2.jpg" alt="logoCompany" />
          <h3 className={styles.subtitle}>test</h3>
        </div>
        <div className={styles.eachWork}>
          <img src="/image/work3.jpg" alt="logoCompany" />
          <h3 className={styles.subtitle}>test</h3>
        </div>
        <div className={styles.eachWork}>
          <img src="/image/work4.jpg" alt="logoCompany" />
          <h3 className={styles.subtitle}>test</h3>
        </div>
      </div>
      
        <div className={styles.ourProduct}>

           <h3 className={styles.title}>Nasze produkty</h3>
           <p className={styles.description}>Tworzone z pasją i doświadczeniem</p>
<nav className={styles.productNav}>
    <ul className={styles.navList}>
        <li>
        <NavLink to="/nowości">Nowości</NavLink>
        </li>
        <li>
        <NavLink to="/meble">Meble</NavLink>
        </li>
        <li>
        <NavLink to="/stoliki">Stoliki</NavLink>
        </li>
        <li>
        <NavLink to="/sofy">Sofy</NavLink>
        </li>
        <li>
        <NavLink to="/akcesoria">Akcesoria</NavLink>
        </li>
    </ul>

</nav>
        </div>
    </section>
  );
};

export default Home;
