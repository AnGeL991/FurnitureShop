import React from "react";
import styles from "./horizontalProductBox.module.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faCartPlus } from "@fortawesome/free-solid-svg-icons";
import {NavLink} from 'react-router-dom';



const HorizontalProductBox = ({_id,image, title, price,addToBasket}) => {
  

  return (
    <div className={styles.horizontalProductBox} >
      <div className={styles.img}>
        <img src={image} alt="product" />
      </div>
      <div className={styles.textBox}>
        <h3 className={styles.productTitle}>{title}</h3>
        <p className={styles.price}>{price} zł</p>
        <p className={styles.description}>
        Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w.
        </p>
        <div className={styles.buttonBox}>
        <FontAwesomeIcon icon={faCartPlus} className={styles.buttonIcon} onClick={()=>addToBasket()}/>
       <NavLink to={`/shop/product/${_id}`}> <FontAwesomeIcon icon={faSearch} className={styles.buttonIcon}/></NavLink>
      </div>
      </div>
    </div>
  );
};

HorizontalProductBox.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  basket:PropTypes.array,
  addToBasket:PropTypes.func,
};
HorizontalProductBox.defaultProps = {
  image:
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  title: "Sofa rozkładana biała",
  price: " 1500 zł - 2000",
};

export default HorizontalProductBox;
