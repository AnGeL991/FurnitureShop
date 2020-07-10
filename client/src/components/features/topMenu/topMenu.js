import React from 'react';
import styles from './topMenu.module.scss';
import Logo from '../../common/logo/logo';
import Basket from '../../common/basket/basket';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {NavLink} from 'react-router-dom';

const TopMenu =()=>{

    return(
        <div className={styles.upNav}>
        <div className={styles.logo}>
            <Logo/>
        </div>
        <div className={styles.upNavBar}>
          <ul className={styles.menuTop}>
            <li>
             <FontAwesomeIcon icon={faFacebook} className={styles.icon}/>
            </li>
            <li>
              <NavLink to='/basket'>Koszyk</NavLink>
            </li>
            <li>
              <NavLink to='/account'>Logowanie</NavLink>
            </li>
            <li>
              <NavLink to='/register'>Rejestracja</NavLink>
            </li>
            <li>
              <NavLink to='/ourShop'>Nasz sklep</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Kontakt</NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.searchBox}>
          <form className={styles.formSearch} action="search" method="get">
            <input
              placeholder="Szukaj w sklepie"
              type="text"
              name="s[search_text]"
            />
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
        <div className={styles.telephone}>
            <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          <a href="tel:539-232-321">539-232-321</a>
        </div>
        <Basket/>
      </div>
    )
};

export default TopMenu;