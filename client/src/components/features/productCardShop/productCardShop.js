import React, { Component } from "react";
import styles from "./productCardShop.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faTh, faList } from "@fortawesome/free-solid-svg-icons";
import HorizontalProductBox from "../horizontalProductBox/horizontalProductBoxContainer";
import ProductBox from "../../features/productBox/productBoxContainer";
import Option from '../option/option';
import PropTypes from "prop-types";
import FadeIn from 'react-fade-in';

class ProductCardShop extends Component {
  state = {
    small: false,
    value: 15,
  };

  componentDidMount() {
    const { loadProduct } = this.props;
    loadProduct();
  }

  handleChangeShowList = () => {
    this.setState((prevState) => ({
      small: !prevState.small,
    }));
  };

  handleChangeAmountProduct = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const {
      request,
      productRange,
    } = this.props;
    const { small, value } = this.state;
    const ProductDisplay = productRange.slice(0, value)
    
    // console.log(
    //   "product to display:",
    //   ProductDisplay,
    //   "searchProduct:",
    //   searchProduct,
    //   "product filter by category",
    //   categoryProducts
    // );

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
                Wyświetlanie{" "}
                {ProductDisplay.length <= value ? ProductDisplay.length : value}{" "}
                z {ProductDisplay.length} wyników
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
              <Option/>
              {/* <div className={styles.ordering}>
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
              </div> */}
            </div>
          </div>
          <div className={styles.productCard}>
            {small === true ? (
              <>
                {ProductDisplay.map((el) => (
                  <div className={styles.eachProduct}>
                  <FadeIn>
                  <ProductBox width={100} key={el._id} {...el} />
                  </FadeIn>
                  </div>
                ))}
              </>
            ) : (
              <>
                {ProductDisplay.map((el) => (
                  
                  <FadeIn>
                  <HorizontalProductBox key={el._id} {...el} />
                  </FadeIn>
                ))}
              </>
            )}
          </div>
        </section>
      );
  }
}
ProductCardShop.propTypes = {
  productRange: PropTypes.array,
};

ProductCardShop.defaultProps = {
  productRange: [],
};

export default ProductCardShop;
