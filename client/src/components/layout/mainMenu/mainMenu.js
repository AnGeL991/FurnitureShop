import React from "react";
import styles from "./mainMenu.module.scss";
import { NavLink } from "react-router-dom";
import Logo from "../../common/logo/logo";
import Search from "../../common/searchInput/search";
import MiniProductList from "../../features/miniProductList/miniProductListContainer";

const MainMenu = () => {
  return (
    <header id="Menu" className={styles.mainMenu}>
      <nav className={styles.mainNav}>
        <div className={styles.navMidle}>
          <Logo />
        </div>
        <ul className={styles.navLeft}>
          <li>
            <NavLink to="/workshop">pracownia</NavLink>
          </li>
          <li>
            <NavLink to="/shop">sklep</NavLink>
          </li>
          <li>
            <NavLink to="/realization">realizacja</NavLink>
          </li>
          <li>
            <NavLink to="/blog">blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact">kontakt</NavLink>
          </li>
          <li>
            <NavLink to="/account">Moje konto</NavLink>
          </li>
        </ul>
        <div className={styles.navRight}>
          <MiniProductList />
          <Search />
        </div>
      </nav>
    </header>
  );
};

export default MainMenu;
