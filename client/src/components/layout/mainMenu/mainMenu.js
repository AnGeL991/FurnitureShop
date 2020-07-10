import React from "react";
import styles from "./mainMenu.module.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faSearch } from "@fortawesome/free-solid-svg-icons";

const MainMenu = () => (
  <header id="Menu" className={styles.mainMenu}>
    <nav>
    <div className={styles.navMidle}><img src='/image/logo.jpg' alt="logoCompany"/></div>
      <ul className={styles.navLeft}>
        <li>
          <NavLink to="/pracownia">pracownia</NavLink>
        </li>
        <li>
          <NavLink to="/oferta">oferta</NavLink>
        </li>
        <li>
          <NavLink to="/sklep">sklep</NavLink>
        </li>
        <li>
          <NavLink to="/Realizacja">realizacja</NavLink>
        </li>
        <li>
          <NavLink to="/Blog">blog</NavLink>
        </li>
        <li>
          <NavLink to="/Kontakt">kontakt</NavLink>
        </li>
      </ul>
      
      <div className={styles.navRight}>
        <div className={styles.basket}>
          <FontAwesomeIcon icon={faShoppingBasket} className={styles.icon} />
          <span className={styles.basketQuantity}>0</span>
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
