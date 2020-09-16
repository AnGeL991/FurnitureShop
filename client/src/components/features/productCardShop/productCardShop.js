import React, { Component } from "react";
import styles from "./productCardShop.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faList } from "@fortawesome/free-solid-svg-icons";
import Option from '../option/optionContainer';
import PropTypes from "prop-types";
import RenderProducts from '../renderProducts/renderProducts'

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
      sortArray,
    } = this.props;
    const { small, value } = this.state;
    const ProductDisplay = sortArray.length ===0?  productRange.slice(0, value): sortArray.slice(0,value);
    
    console.log(
      "product to display:",
      ProductDisplay,
      "searchProduct:",
   
      "product filter by category",
     
    );

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
            </div>
          </div>
          <RenderProducts small={small} arreyToMap={ProductDisplay}/>
        </section>
      );
  }
}
ProductCardShop.propTypes = {
  productRange: PropTypes.array,
  sortArray:PropTypes.array,
};

ProductCardShop.defaultProps = {
  productRange: [],
  sortArray:[],
};

export default ProductCardShop;
