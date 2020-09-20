import React from "react"
import styles from "./productBox.module.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartPlus } from "@fortawesome/free-solid-svg-icons";

const ProductBox = ({
  width,
  _id,
  title,
  price,
  image,
  addToBasket,
}) => {
  return (
    <div
      className={styles.productBox}
      id={_id}
      style={{width:`${width}`}}
      
    >
      <div className={styles.img}>
        <div className={styles.actionIcon}>
          <div className={styles.circleBox}>
            <FontAwesomeIcon icon={faSearch} className={styles.icon} />
          </div>
          <div className={styles.circleBox}
           onClick={() => addToBasket()}>
            <FontAwesomeIcon
              icon={faCartPlus}
              className={styles.icon}
            />
          </div>
        </div>
        <img src={image} alt="product" />
      </div>
      <div className={styles.textBox}>
        <h3 className={styles.productTitle}>{title}</h3>
        <p className={styles.price}>{price.toFixed(2)}zł</p>
      </div>
    </div>
  );
};
ProductBox.propTypes = {
  _id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  width: PropTypes.string.isRequired,
  basket: PropTypes.array,
  addToBasket: PropTypes.func,
  addItem: PropTypes.func,
};

export default ProductBox;
