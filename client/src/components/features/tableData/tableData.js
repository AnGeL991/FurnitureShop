import React, { Component } from "react";
import styles from "./tableData.module.scss";
import { NavLink } from "react-router-dom";

class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delivery: 200,
    };
    this.handleChange.bind(this);
  }

  componentDidMount() {
    const { loadOrder } = this.props;
    loadOrder();
  }
  componentDidUpdate() {
    console.log(this.totalPaymount);
  }
  handleChange=(event)=>{
     this.setState({
       delivery:event.target.value,
     })
  }
  totalPaymount;
  renderTableData() {
    const { request, order } = this.props;
    let payments = 0;
    if (request.pending) return <div>Pending</div>;
    else if (request.error) return <div>something is wrong</div>;
    else if (!request.success) return <div>Nie masz nic w koszyku</div>;
    else if (request.success)
      return order.map((order) => {
        payments += parseInt(order.price, 10);
        console.log("price", payments);
        this.totalPaymount = payments;
        return (
          <tr key={order.id} className={styles.cartItem}>
            <td className={styles.productRemove}>X</td>
            <td className={styles.productThumbnail}>
              <img src={order.image} alt="Thumbnail product" />
            </td>
            <td className={styles.productName}>{order.title}</td>
            <td className={styles.productPrice}>{order.price} zł</td>
            <td className={styles.productQuantity}>
              <div className={styles.quality}>
                <label></label>
                <input
                  type="number"
                  value="1"
                  title="Szt."
                  step="1"
                  className={styles.inputAmount}
                  min="0"
                />
              </div>
            </td>
            <td className={styles.productSubtotal} o>
              {order.price} zł
            </td>
          </tr>
        );
      });
  }

  render() {
    const { request } = this.props;
    if (request.pending) return <div>Pending</div>;
    else if (request.error) return <div>something is wrong</div>;
    else if (!request.success) return <div>Nie masz nic w koszyku</div>;
    else if (request.success)
      return (
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
                        {this.totalPaymount}&nbsp;
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
                            value={0}
                            className={styles.shippingMethod}
                            onChange={this.handleChange}
                          />
                          <label>
                            &nbsp;Odbiór osobisty&nbsp;
                            <span className={styles.shippingPrice}>
                              0&nbsp;<span>zł</span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <input type="radio" name="method" checked="checked" value={200} onChange={this.handleChange}/>
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
                        {this.totalPaymount + parseFloat(this.state.delivery)}&nbsp;
                        <span className={styles.currentCash}>zł</span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className={styles.prepareToCheckout}>
                <NavLink to="/payments">
                  <button type="submit" className={styles.checkout}>
                    Przejdz do kasy
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      );
  }
}

export default TableData;
