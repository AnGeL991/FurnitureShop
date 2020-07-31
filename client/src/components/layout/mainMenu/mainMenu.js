import React from "react";
import styles from "./mainMenu.module.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from '../../common/logo/logo';

const MainMenu = () => (
  <header id="Menu" className={styles.mainMenu}>
    <nav>
    <div className={styles.navMidle}><Logo/></div>
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
        <div className={styles.basket}><NavLink to="/order">
        <FontAwesomeIcon icon={faShoppingBasket} className={styles.icon} />
          <span className={styles.basketQuantity}>0</span>
        </NavLink>
        </div>
        <div className={styles.searchBox}>
          <form className={styles.formSearch} action="search" method="get">
            <input placeholder="Szukaj w sklepie"
            type="text"
            name="s[search_text]"/>
            <button type='submit' className={styles.btnSubmit}>
            <FontAwesomeIcon icon={faSearch} className={styles.icon} />
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
);

export default MainMenu;
