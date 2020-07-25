import React from "react";
import styles from "./horizontalProductBox.module.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faCartPlus } from "@fortawesome/free-solid-svg-icons";

const HorizontalProductBox = ({ id, image, title, price }) => {
  return (
    <div className={styles.horizontalProductBox} id={id}>
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
        <FontAwesomeIcon icon={faCartPlus} className={styles.buttonIcon}/>
        <FontAwesomeIcon icon={faSearch} className={styles.buttonIcon}/>
      </div>
      </div>
      
    </div>
  );
};

HorizontalProductBox.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
HorizontalProductBox.defaultProps = {
  id: "123",
  image:
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  title: "Sofa rozkładana biała",
  price: " 1500 zł - 2000",
};
export default HorizontalProductBox;
