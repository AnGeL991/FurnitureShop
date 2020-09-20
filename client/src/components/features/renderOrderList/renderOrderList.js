import React from 'react'
import styles from './renderOrderList.module.scss';
import PropTypes from 'prop-types'



const RenderOrderList =({orders,removeFromBasekt})=>{
    
    return(
    orders.map((order) => {
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
            <a href="/shop" className={styles.miniProductTitle}>
              {order.title}
            </a>
            <div className={styles.miniProductContent}>
              <p>{order.description}Przykładowy opis techniczny rozmiary</p>
              <p className={styles.quantity}>
                {order.amount} x
                <span className={styles.amount}> {order.price.toFixed(2)} zł</span>
              </p>
            </div>
          </li>
        )
      })
    )
};
RenderOrderList.protoType = {
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    description: PropTypes.string,
    orders: PropTypes.array,
    removeFromBasekt:PropTypes.func,
  };
  

export default RenderOrderList;