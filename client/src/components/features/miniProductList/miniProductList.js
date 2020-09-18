import React from "react";
import styles from "./miniProductList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import Button from "../../common/button/button";
import PropTypes from "prop-types";
import RenderOrderList from '../renderOrderList/renderOrderListContainer';

class MiniProductList extends React.Component {
  state = {
    isBoxVisible: false,
  };

  toggleBox = () => {
    this.setState((prevState) => ({ isBoxVisible: !prevState.isBoxVisible }));
  };

  renderList = () => {
    const { orders,removeFromBasekt } = this.props;
      return orders.map((order) => {
        return (
          <li className={styles.miniCardList} key={order._id}>
            <div className={styles.removeFromOrder}>
              <p className={styles.removeIcon} onClick={()=>removeFromBasekt(order._id)}>X</p>
            </div>
            <img
              src={order.image}
              className={styles.miniCardImage}
              alt="miniCardProduct"
            />
            <a href="#" className={styles.miniProductTitle}>
              {order.title}
            </a>
            <div className={styles.miniProductContent}>
              <p>{order.description}Przykładowy opis techniczny rozmiary</p>
              <span className={styles.quantity}>
                {order.amount} x
                <span className={styles.amount}> {order.price.toFixed(2)} zł</span>
              </span>
            </div>
          </li>
        );
      });

  };

  totalPrice = ()=> {
    const {orders} = this.props;
    const totalPrice = orders.reduce((total,order)=>{
      return total +(order.price* order.amount)
    },0)
    return totalPrice.toFixed(2);
  }

  totalAmount =()=>{
    const {orders} = this.props;
    const totalAmount = orders.reduce((total,order)=>{
      return total +order.amount
    },0)
    return totalAmount;
  }

  render() {
    const { isBoxVisible} = this.state;
    const {orders} = this.props;
    return (
      <div className={styles.basket}>
        <FontAwesomeIcon
          icon={faShoppingBasket}
          className={styles.icon}
          onClick={this.toggleBox}
        />
        <span className={styles.basketQuantity}>{this.totalAmount()}</span>
        <div
          className={styles.basketItem}
          onMouseMove={() => this.setState({ isBoxVisible: true })}
          onMouseLeave={() => this.setState({ isBoxVisible: false })}
          style={{
            visibility: `${isBoxVisible === true ? "unset" : "hidden"}`,
            opacity: `${isBoxVisible === true ? "1" : "0"}`,
            transform: `${
              isBoxVisible === true
                ? "translate(-50%,10px) "
                : "translate(-50%,20%)"
            }`,
          }}
        >
          {orders.length >0 ? <> <div className={styles.contentShopingCart}>
            <ul className={styles.productList}>
              {/* {this.renderList()} */}
              <RenderOrderList/>
            </ul>
            <p className={styles.miniCardTotal}>
              <strong>Kwota: </strong>
              <span className={styles.priceAmount}>
                {this.totalPrice()}
                <span className={styles.priceCurrentSymbol}>zł</span>
              </span>
            </p>
          </div>
          <div className={styles.cardBtn}>
            <Button width="45%" margin="0 10% 0 0 " link="/shop" onClick={()=>this.setState({isBoxVisible:false})}>
              kontynuuj zakupy
            </Button>
            <Button width="45%" link="/order">
              Kup
            </Button>
          </div></>:<div className={styles.contentShopingCart}><h4 className={styles.emptyBasketText}>Koszyk jest pusty</h4></div>}
        </div>
      
      </div>
    );
  }
}

MiniProductList.protoType = {
  _id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  description: PropTypes.string,
  orders: PropTypes.array,
  removeFromBasekt:PropTypes.func,
};


export default MiniProductList;
