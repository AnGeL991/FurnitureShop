import React from 'react';
import styles from './renderProducts.module.scss';
import ProductBox from '../productBox/productBoxContainer';
import HorizontalProductBox from '../horizontalProductBox/horizontalProductBoxContainer'
import PropTypes from "prop-types";
import FadeIn from 'react-fade-in';

const Render =({small,arreyToMap})=>{
    return (<div className={styles.productsData} >
        {small === true ? (
              <>
                {arreyToMap.map((el) => (
                  <div className={styles.eachProduct} key={el._id}>
                  <FadeIn key={el._id} transitionDuration={2000}>
                  <ProductBox width='100' key={el.id} {...el} />
                  </FadeIn>
                  </div>
                ))}
              </>
            ) : (
              <>
                {arreyToMap.map((el) => (
                    <div className={styles.eachHorizontalProduct} key={el._id}>
                  <FadeIn key={el._id} transitionDuration={2000}>
                  <HorizontalProductBox key={el._id} {...el} />
                  </FadeIn>
                  </div>
                ))}
              </>
            )}
    </div>)

};
Render.prototypes ={
    arreyToMap: PropTypes.array,
    small:PropTypes.bool,
}
Render.defaultProps = {
    arreyToMap: [],
};

export default Render;