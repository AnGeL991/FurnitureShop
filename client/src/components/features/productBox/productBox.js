/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styles from "./productBox.module.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faCartPlus } from "@fortawesome/free-solid-svg-icons";


const ProductBox = ({ width, _id, title, price, image,addToBasket }) => {
  return (
    <div
      className={styles.productBox}
      id={_id}
      css={css`
        width: ${width};
      `}
    >
      <div className={styles.img}>
        <div className={styles.circleBox}>
          <FontAwesomeIcon icon={faSearch} className={styles.icon} />
        </div>
        <div className={styles.circleBox}>
          <FontAwesomeIcon icon={faCartPlus} 
          className={styles.icon} onClick={()=>addToBasket() } />
        </div>

        <img src={image} alt="product" />
      </div>
      <div className={styles.textBox}>
        <h3 className={styles.productTitle}>{title}</h3>
        <p className={styles.price}>{price}zł</p>
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
  basket:PropTypes.array,
  addToBasket:PropTypes.func,
};
ProductBox.defaultProps = {
  _id: "123",
  image:
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  title: "Nazwa Testowa",
  price: 13.54,
  width: "calc(25% - 20px)",
};

export default ProductBox;
