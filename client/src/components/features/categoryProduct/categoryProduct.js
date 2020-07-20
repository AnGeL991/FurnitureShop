import React from 'react';
import styles from './categoryProduct.module.scss';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const CategoryProduct =()=>{

    return(
        <aside className={styles.aside}>
            <div className={styles.asideInner}>
              <form method="get" className={styles.widgetProductSearch}>
                <input
                  type="search"
                  placeholder="Szukaj w sklepie"
                  name="search"
                  title="Szukaj:"
                  className={styles.inputSearch}
                />
                <button type="submit" className={styles.searchButton}>
                  <FontAwesomeIcon icon={faSearch} />
                </button>
                <input type="hidden" name="post_type" value="product" />
              </form>
              <div className={styles.categoriesMenu}>
                <h3>Kategorie</h3>
                <ul>
                  <li className={styles.categoriesLink}>
                    <NavLink to="/">Nowości</NavLink>
                  </li>
                  <li className={styles.categoriesLink}>
                    <NavLink to="/">Akcesoria</NavLink>
                  </li>
                  <li className={styles.categoriesLink}>
                    <NavLink to="/">Łóżka</NavLink>
                  </li>
                  <li className={styles.categoriesLink}>
                    <NavLink to="/">Sofy</NavLink>
                  </li>
                  <li className={styles.categoriesLink}>
                    <NavLink to="/">Meble kuchenne</NavLink>
                  </li>
                  <li className={styles.categoriesLink}>
                    <NavLink to="/">Stoły rozkładane</NavLink>
                  </li>
                  <li className={styles.categoriesLink}>
                    <NavLink to="/">Stoły</NavLink>
                  </li>
                  <li className={styles.categoriesLink}>
                    <NavLink to="/">Regały</NavLink>
                  </li>
                </ul>
              </div>
              <div className={styles.priceFilter}>
                <h4 className={styles.priceTitle}>Cena</h4>
                <div className={styles.SliderAmount}>
                  <button type="submit" className={styles.amountButton}>
                    filtruj
                  </button>
                  <div className={styles.priceLabel}>
                    <span>Cena:</span>
                    <span>0&nbsp;zł</span>
                    <span>-</span>
                    <span>6 600&nbsp;zł</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
    )
};

export default CategoryProduct;