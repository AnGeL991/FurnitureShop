import React,{useState} from "react";
import styles from "./categoryProduct.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import Button from "../../common/button/button";


const CategoryProduct = ({addCategories}) => {
  const categories =[
    {id:'new', name:'new'},
    {id:'accessories',name:'accessories'},
    {id:'bed',name:'bed'},
    {id:'sofas',name:'sofas'},
    {id:'kitchenFurniture',name:'kitchenFurniture'},
    {id:'tables',name:'tables'},
    {id:'shelves',name:'shelves'},
 ];

  const [priceValue,setPriceValue]= useState(0);
  
  return (
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
            {categories.map((category)=>(<li className={styles.categoriesLink} key={category.id}  onClick={()=>addCategories(category.name)}>
              <p className={styles.eachLink}>{category.name}</p>
            </li>))}
          </ul>
        </div>
        <div className={styles.priceFilter}>
          <h4 className={styles.priceTitle}>Cena</h4>
          <div className={styles.rageSlider}>
            <input type="range" min="0" max="6600" step="50" onChange={(e)=>setPriceValue(e.target.value)}/>
            <Button margin="50px 0 0 0" width="50%" uppercase={false}>
              Filtruj
            </Button>
            <div className={styles.priceLabel}>
              <span>Cena:</span>
              <span>{priceValue}&nbsp;zł</span>
              <span>-</span>
              <span>6 600&nbsp;zł</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

CategoryProduct.propTypes = {
  id: PropTypes.string,
  addCategories:PropTypes.func,
};



export default CategoryProduct;
