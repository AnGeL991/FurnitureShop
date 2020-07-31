import React, { Component } from "react";
import styles from "./order.module.scss";
import Header from "../../common/headerTitle/header";
import {NavLink} from 'react-router-dom';

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [
        {
          id: 1,
          image:
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
          name: "product name",
          price: "1800",
          amount: 1,
          subtotal: "1800",
        },
        {
          id: 1,
          image:
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
          name: "product name",
          price: "1800",
          amount: 1,
          subtotal: "1800",
        },
        {
          id: 1,
          image:
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
          name: "product name",
          price: "1800",
          amount: 1,
          subtotal: "1800",
        },
      ],
    };
  }
  renderTableData() {
    return this.state.orders.map((order) => {
      const { id, image, name, price, amount, subtotal } = order;
      return (
        <tr key={id} className={styles.cartItem}>
          <td className={styles.productRemove}>X</td>
          <td className={styles.productThumbnail}>
            <img src={image} />
          </td>
          <td className={styles.productName}>{name}</td>
          <td className={styles.productPrice}>{price} zł</td>
          <td className={styles.productQuantity}>
            <div className={styles.quality}>
              <label></label>
              <input
                type="number"
                id={id}
                value={amount}
                title="Szt."
                step="1"
                className={styles.inputAmount}
                min="0"
              />
            </div>
          </td>
          <td className={styles.productSubtotal}>{subtotal} zł</td>
        </tr>
      );
    });
  }
  render() {
    return (
      <section className={styles.page}>
        <Header
          fontSize="34px"
          textAlign="left"
          fontWeight="300"
          margin="20px 140px "
        >
          Koszyk
        </Header>
        <section className={styles.contentBox}>
          <div className={styles.wrapper}>
            <form className={styles.orderForm} method="post">
              <table className={styles.shopTable} cellSpacing="0">
                <thead className={styles.headTable}>
                  <tr>
                    <th className={styles.productRemove}>&nbsp;</th>
                    <th className={styles.productThumbnail}>&nbsp;</th>
                    <th className={styles.productName}>Product</th>
                    <th className={styles.productPrice}>Cena</th>
                    <th className={styles.productQuantity}>ilość</th>
                    <th className={styles.productSubtotal}>kwota</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderTableData()}
                  <tr>
                    <td colspan="6" className={styles.couponSection}>
                      <div className={styles.coupon}>
                        <label></label>
                        <input
                          type="text"
                          name="couponCode"
                          className={styles.inputText}
                          placeholder="Kod Kuponu"
                        />
                        <button
                          type="submit"
                          className={styles.couponSubmit}
                          value="Zastosuj kupon"
                        >
                          Zastosuj kupon
                        </button>
                      </div>
                      <button
                        type="submit"
                        className={styles.btnSubmit}
                        disabled
                      >
                        Zaktualizuj koszyk
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
          <div className={styles.wrapperTotalPrice}>
            <div className={styles.totalSection}>
              <table>
                <tbody>
                  <tr>
                    <th>Kwota</th>
                    <td>
                      <span className={styles.priceAmount}>
                        2 700,00&nbsp;
                        <span className={styles.priceSymbol}>zł</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th>Wysyłka</th>
                    <td>
                      <ul className={styles.shipping}>
                        <li>
                          <input
                            type="radio"
                            name="method"
                            className={styles.shippingMethod}
                          />
                          <label>&nbsp;Odbiór osobisty&nbsp;<span className={styles.shippingPrice}>0&nbsp;<span>zł</span></span></label>
                        </li>
                        <li>
                          <input type="radio" name="method" checked="checked" />
                          <label>
                            Przesyłka Kurierska:
                            <span className={styles.shippingPrice}>
                               &nbsp;200&nbsp;
                              <span className={styles.currentCash}>zł</span>
                            </span>
                          </label>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>Suma</th>
                    <td>
                      <span className={styles.totalPaymount}>
                        2 700,00&nbsp;
                        <span className={styles.currentCash}>zł</span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className={styles.prepareToCheckout}>
                    <NavLink to='/checkout'><button type='submit' className={styles.checkout}>Przejdz do kasy</button></NavLink>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Order;
