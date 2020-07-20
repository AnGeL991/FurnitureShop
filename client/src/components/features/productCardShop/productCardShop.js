import React from 'react';
import styles from './productCardShop.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSortDown } from "@fortawesome/free-solid-svg-icons";
import ProductBox from '../../features/productBox/productBox';

const ProductCardShop = ()=>{

    return(
        <section className={styles.contentBox}>
        <div className={styles.toolbar}>
          <div className={styles.toolbarLeft}>
            <p className={styles.resultCount}>
              Wyświetlanie 1-12 z 99 wyników
            </p>
            <div className={styles.vievCount}>
              <p> pokaż</p>
              <ul>
                <li className={styles.amount}>15</li>
                <li className={styles.amount}>30</li>
                <li className={styles.amount}>60</li>
              </ul>
            </div>
          </div>
          <div className={styles.toolbarRight}>
            <div className={styles.ordering}>
              <p>
                sortuj
                <FontAwesomeIcon
                  icon={faSortDown}
                  className={styles.icon}
                />
              </p>
              <ul className={styles.showList}>
                <li ><a href='/' className={styles.active}>Sortowanie domyślne</a></li>
                <li><a href='/'>Sortuj wg. ceny: od najwyższej</a></li>
                <li><a href='/'>Sortuj wg. ceny: od najniższej</a></li>
                <li><a href='/'>Sortuj wg. popularności</a></li>
                <li><a href='/'>Sortuj od najnowszych</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.productCard}>
<ProductBox/>
<ProductBox/>
<ProductBox/>
<ProductBox/>
<ProductBox/>
<ProductBox/>
<ProductBox/>
<ProductBox/>
<ProductBox/>
<ProductBox/>
<ProductBox/>
<ProductBox/>
        </div>
      </section>
    )
};

export default ProductCardShop;