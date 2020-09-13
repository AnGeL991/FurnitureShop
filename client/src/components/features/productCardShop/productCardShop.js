import React, { Component } from "react";
import styles from "./productCardShop.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faTh, faList } from "@fortawesome/free-solid-svg-icons";
import HorizontalProductBox from "../horizontalProductBox/horizontalProductBoxContainer";
import ProductBox from "../../features/productBox/productBoxContainer";
import productCardShopContainer from "./productCardShopContainer";
import PropTypes from 'prop-types';

class ProductCardShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: {
        small: false,
      },
      amountProductOnList: {
        value: 15,
      },
      category: {
        activeCategory: null,
      },
      Option: {
        activeOption : "",
      }
    };
  }

  componentDidMount() {
    const { loadProduct } = this.props;
    loadProduct();
  }

  handleChangeShowList = () => {
    this.setState((prevState) => ({
      productList: {
        small: !prevState.productList.small,
      },
    }));
  };

  handleChangeAmountProduct = (e) => {
    this.setState({
      amountProductOnList: {
        value: e.target.value,
      },
    });
  };

  render() {
    const { request, products,category,searchProduct } = this.props;
    const { small } = this.state.productList;
    const { value } = this.state.amountProductOnList;
    const categoryProduct = products.filter(item => item.category === category);
    const elemsToDisplay = categoryProduct.length === 0 ? products.slice(0,value): categoryProduct.slice(0,value) ===0;
    const ProductDisplay = searchProduct.length ===0 ? elemsToDisplay : searchProduct;
console.log(ProductDisplay, searchProduct);


    if (request.pending) return <div>Pending</div>;
    else if (request.error) return <div>something is wrong</div>;
    else if (!request.success)
      return <div> Don't have product on the warehouse</div>;
    else if (request.success)
      return (
        <section className={styles.contentBox}>
          <div className={styles.toolbar}>
            <div className={styles.toolbarLeft}>
              <p className={styles.resultCount}>
                Wyświetlanie {ProductDisplay.length <= value ? ProductDisplay.length : value} z {ProductDisplay.length} wyników
              </p>
              <div className={styles.vievCount}>
                <p> pokaż</p>
                <ul>
                  <li
                    className={[
                      `${styles.amount} + ${
                        value === 15 ? styles.active : null
                      }`,
                    ]}
                    value={15}
                    onClick={this.handleChangeAmountProduct}
                  >
                    15
                  </li>
                  <li
                    className={[
                      `${styles.amount} + ${
                        value === 30 ? styles.active : null
                      }`,
                    ]}
                    value={30}
                    onClick={this.handleChangeAmountProduct}
                  >
                    30
                  </li>
                  <li
                    className={[
                      `${styles.amount} + ${
                        value === 60 ? styles.active : null
                      }`,
                    ]}
                    value={60}
                    onClick={this.handleChangeAmountProduct}
                  >
                    60
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.toolbarRight}>
              <div className={styles.vievToogle}>
                <FontAwesomeIcon
                  icon={faTh}
                  className={styles.icon}
                  onClick={this.handleChangeShowList}
                />
                <FontAwesomeIcon
                  icon={faList}
                  className={styles.icon}
                  onClick={this.handleChangeShowList}
                />
              </div>
              <div className={styles.ordering}>
                <p>
                  sortuj
                  <FontAwesomeIcon
                    icon={faSortDown}
                    className={styles.arrowIcon}
                  />
                </p>
                <ul className={styles.showList}>
                  <li>
                    <a href="/" className={styles.active}>
                      Sortowanie domyślne
                    </a>
                  </li>
                  <li>
                    <a href="/">Sortuj wg. ceny: od najwyższej</a>
                  </li>
                  <li>
                    <a href="/">Sortuj wg. ceny: od najniższej</a>
                  </li>
                  <li>
                    <a href="/">Sortuj wg. popularności</a>
                  </li>
                  <li>
                    <a href="/">Sortuj od najnowszych</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.productCard}>
            {small === true ? (
              <>
                {ProductDisplay.map((el) => (
                  <ProductBox key={el._id} {...el} />
                ))}
              </>
            ) : (
              <>
                {ProductDisplay.map((el) => (
                  <HorizontalProductBox key={el._id} {...el} />
                ))}
              </>
            )}
          </div>
        </section>
      );
  }
}
ProductCardShop.propTypes ={
  category:PropTypes.string,
  products: PropTypes.array,
  searchProduct:PropTypes.array,
}

ProductCardShop.defaultProps = {
   category: '',
   products:[],
   searchProduct:[],
}

export default ProductCardShop;
