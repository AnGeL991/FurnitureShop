import React from 'react';
import PropTypes from 'prop-types';
//import NotFound from '../pageNoFound/pageNoFound';
import styles from './product.module.scss';
import Header from '../../common/headerTitle/header';
import Container from '../../layout/container/container';

const Product =({error,title,image,price})=>{
    // if(error) return <NotFound/>;
  return(
        <div className={styles.page}>
          <Header
      fontSize="34px"
      textAlign="left"
      fontWeight="300"
      margin="20px 140px "
    >{title}
       </Header>
       <Container>
           <div className={styles.wrapper}>
                <div className={styles.imageBox}>
                    <img src={image} alt='product-id' className={styles.productImage}/>
                </div>
                <div className={styles.contentBox}>
                   <div className={styles.productSummary}>
                       <p className={styles.price}>
                            {price}
                       </p>
                       <form className={styles.variationsForm}>
                           <table className={styles.variations}>

                           </table>
                           <div className={styles.variationsButton}>

                           </div>

                       </form>
                   </div>
                </div>
           </div>
       </Container>
        </div>
    )
};

Product.propTypes ={
    title:PropTypes.string,
    price:PropTypes.number,
    description:PropTypes.string,
    image:PropTypes.string,
}
Product.defaultProps={
    title:'Przykładowy tytuł',
    image:'https://images.unsplash.com/photo-1507904953637-96429a46671a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    price:500
}

export default Product;