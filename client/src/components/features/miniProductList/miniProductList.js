import React from "react";
import styles from "./miniProductList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import Button from '../../common/button/button';

class MiniProductList extends React.Component {
  state = {
    isBoxVisible: false,
  };
  toggleBox = () => {
    this.setState((prevState) => ({ isBoxVisible: !prevState.isBoxVisible }));
  };

  render() {
    const { isBoxVisible } = this.state;
    return (
      <div className={styles.basket}>
        <FontAwesomeIcon
          icon={faShoppingBasket}
          className={styles.icon}
          onClick={this.toggleBox}
        />
        <span className={styles.basketQuantity}>0</span>
        <div
          className={styles.basketItem}
          style={{
            visibility: `${isBoxVisible === true ? "visible" : "hidden"}`,
          }}
        >
          <div className={styles.contentShopingCart}>
            <ul className={styles.productList}>
              <li className={styles.miniCardList}>
                <img
                  src="https://images.unsplash.com/photo-1463082459669-fd1ca1692fea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                  className={styles.miniCardImage}
                  alt="miniCardProduct"
                />
                <a href="#" className={styles.miniProductTitle}>
                  Przykładowy tytuł towaru
                </a>
                <div className={styles.miniProductContent}>
                  <p>przykładowy opis towaru</p>
                  <span className={styles.quantity}>
                    1 x<span className={styles.amount}> 1350,00 zł</span>
                  </span>
                </div>
              </li>
            </ul>
            <p className={styles.miniCardTotal}>
              <strong>Kwota:</strong>
              <span className={styles.priceAmount}>
                1350
                <span className={styles.priceCurrentSymbol}>zł</span>
              </span>
            </p>
          </div>
          <div className={styles.cardBtn}>
            <Button width="45%" margin="0 10% 0 0 " link='/shop'>kontynuuj zakupy</Button>
            <Button width="45%" link='/order'>Kup</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default MiniProductList;
