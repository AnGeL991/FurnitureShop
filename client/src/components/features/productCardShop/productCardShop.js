import React, { Component } from "react";
import styles from "./productCardShop.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faTh, faList } from "@fortawesome/free-solid-svg-icons";
import HorizontalProductBox from "../horizontalProductBox/horizontalProductBoxContainer";
import ProductBox from "../../features/productBox/productBoxContainer";

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
    const { request, products } = this.props;
    const { small } = this.state.productList;
    const { value } = this.state.amountProductOnList;
    const categoryProduct = products.filter(item => item.category === this.state.category.activeCategory);
    const elemsToDisplay = categoryProduct.length === 0 ? products.slice(0,value): categoryProduct.slice(0,value);

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
                Wyświetlanie {elemsToDisplay.length <= value ? elemsToDisplay.length : value} z {products.length} wyników
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
                {elemsToDisplay.map((el) => (
                  <ProductBox key={el._id} {...el} />
                ))}
              </>
            ) : (
              <>
                {elemsToDisplay.map((el) => (
                  <HorizontalProductBox key={el._id} {...el} />
                ))}
              </>
            )}
          </div>
        </section>
      );
  }
}
ProductCardShop.defaultProps = {
   category: [],
   products:[],
  
}

export default ProductCardShop;
