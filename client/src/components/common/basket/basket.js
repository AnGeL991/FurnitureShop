import React from 'react';
import styles from './basket.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';


const Basket = ()=>{

    return(
        <div className={styles.basket}>
        <a href="/order" title="Basket">
          <FontAwesomeIcon icon={faShoppingBasket} className={styles.icon} />
          <span className={styles.basketQuantity}>0</span>
          <span className={styles.basketPrice}>0,00&nbsp;zł</span>
        </a>
      </div>
    )
};


export default Basket;
