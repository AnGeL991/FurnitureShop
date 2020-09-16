import React from "react";
import styles from "./productNav.module.scss";
import PropTypes from 'prop-types';


const  ProductNav = ({addCategories})=> {
  const categories =[
    {id:'new', name:'nowości'},
    {id:'bed',name:'łózka'},
    {id:'sofas',name:'sofas'},
    {id:'kitchenFurniture',name:'meble kuchenne'},
    {id:'tables',name:'stoły'},
    {id:'shelves',name:'półki'},
 ];  
 
  
    return (
      <nav className={styles.productNav} id="homeProductNav">
        <ul className={styles.navList}>
         {categories.map(el => <li key={el.id} onClick={()=>addCategories(el.id)}><p>{el.name}</p></li>)}
        </ul>
      </nav>
    );
}

ProductNav.propTypes = {
  addCategories:PropTypes.func,
}
export default ProductNav;
