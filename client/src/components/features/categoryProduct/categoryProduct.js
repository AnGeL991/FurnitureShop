import React from "react";
import styles from "./categoryProduct.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import Button from "../../common/button/button";


const CategoryProduct = ({addCategories,searchValue,maxPrice,setPriceValue,minPrice}) => {
  const categories =[
    {id:'',name:'wszystkie'},
    {id:'new', name:'nowości'},
    {id:'accessories',name:'akcesoria'},
    {id:'bed',name:'łózka'},
    {id:'sofas',name:'sofas'},
    {id:'kitchenFurniture',name:'meble kuchenne'},
    {id:'tables',name:'stoły'},
    {id:'shelves',name:'półki'},
 ];  
  function handleChangeSearch (e){
    console.log(e.target.type);
    const type = e.target.type;
    const value = e.target.value;
    searchValue(type,value)
  }
  function handleChangeValue(e){
    const value = e.target.value;
    //console.log(value);
    setPriceValue(value)
  }


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
            onChange={(e)=>handleChangeSearch(e)}
          />
          <button type="submit" className={styles.searchButton}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <input type="hidden" name="post_type" value="product" />
        </form>
        <div className={styles.categoriesMenu}>
          <h3>Kategorie</h3>
          <ul>
            {categories.map((category)=>(<li className={styles.categoriesLink} key={category.id}  onClick={()=>addCategories(category.id)}>
              <p className={styles.eachLink}>{category.name}</p>
            </li>))}
          </ul>
        </div>
        <div className={styles.priceFilter}>
          <h4 className={styles.priceTitle}>Cena</h4>
          <div className={styles.rageSlider}>
            <input type="range" min="0" max={maxPrice} step="1" onChange={(e)=>handleChangeValue(e)}/>
            <Button margin="50px 0 0 0" width="50%" uppercase={false}>
              Filtruj
            </Button>
            <div className={styles.priceLabel}>
              <span>Cena:</span>
              <span>{parseInt(minPrice)}&nbsp;zł</span>
              <span>-</span>
              <span>{maxPrice}&nbsp;zł</span>
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
  searchValue:PropTypes.func,
  maxPrice:PropTypes.number,
  minPrice:PropTypes.number,
};
CategoryProduct.defaultProps={
  maxPrice:0,
  setPriceValue:0,
  minPrice:0,
}


export default CategoryProduct;
