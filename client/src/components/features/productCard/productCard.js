import React from "react";
import styles from "./productCard.module.scss";
import ProductNav from '../../common/productNav/productNavContainer';
import PublicitySlider from "../publicitySlider/publicitySlider";
import RenderProduct from "../renderProducts/renderProducts";
import PropTypes from 'prop-types';

class ProductCard extends React.Component{

  componentDidMount() {
    const { loadProduct } = this.props;
    loadProduct();
  }
 render(){
   const {products}=this.props;
  return (
    <section className={styles.ourProduct} id='homeProduct'>
    <h3 className={styles.title}>Nasze produkty</h3>
    <p className={styles.description}>Tworzone z pasją i doświadczeniem</p>
<ProductNav/>
<div className={styles.productSection}>
  <div className={styles.publicity}>
   <div>
     50%
   </div>
   <div>
     50%
   </div>
  </div>
  <div className={styles.productCard}>
    <RenderProduct arreyToMap={products} small={true} />
  </div>
</div>
  </section>
  );
}};

ProductCard.protoTypes ={
  // products: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     amount:PropTypes.number,
  //     category:PropTypes.string,
  //     image:PropTypes.string,
  //     title:PropTypes.string,
  //     _id:PropTypes.string,
  //   })
  // )
  products:PropTypes.array,

}
ProductCard.defaultProps={
  products:[],
}

export default ProductCard;
