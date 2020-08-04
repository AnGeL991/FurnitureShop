import React, { Component} from "react";
import styles from "./productCardShop.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faTh, faList } from "@fortawesome/free-solid-svg-icons";
import HorizontalProductBox from "../horizontalProductBox/horizontalProductBox";
import settings from "../../../db/settings";
import ProductBox from '../../features/productBox/productBox';

class ProductCardShop extends Component {

  state = {
    category:{
      small:false,
      big:true,
    },
  }

  componentDidMount() {
    const { loadProduct } = this.props;
    loadProduct();
  }

  handleAddProduct(product) {
  const payload = {product};
  const url = settings.db.API_URL + "/" + settings.db.endpoint.orders;
  const fetchOptions = {
    cache: "no-cache",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  fetch(url, fetchOptions)
    .then(function (response) {
      return response.json();
    })
    .then(function (parsedResponse) {
      console.log("parsedResponse", parsedResponse);
    });
  }
  changeSmallList=()=>{
    this.setState({
      category:{
        small:true,
        big:false,
      }
    })
  }
  changeBigList=()=>{

    this.setState({
      category:{
        small:false,
        big:true,
      }
    })
  }
  render() {
    const { request, products } = this.props;
    const {small} = this.state.category;
    console.log(products);
    if (request.pending) return <div>Pending</div>;
    else if (request.error) return <div>something is bad</div>;
    else if (!request.success)
      return <div>Don't have product on the warehouse</div>;
    else if (request.success)
      return (
        <section className={styles.contentBox}>
          <div className={styles.toolbar}>
            <div className={styles.toolbarLeft}>
              <p className={styles.resultCount}>
                Wyświetlanie 1-12 z 99 wyników
              </p>
              <div className={styles.vievCount}>
                <p> pokaż</p>
                <ul>
                  <li className={styles.amount}>15</li>
                  <li className={styles.amount}>30</li>
                  <li className={styles.amount}>60</li>
                </ul>
              </div>
            </div>
            <div className={styles.toolbarRight}>
              <div className={styles.vievToogle}>
                <FontAwesomeIcon icon={faTh} className={styles.icon} onClick={this.changeSmallList} />
                <FontAwesomeIcon icon={faList} className={styles.icon} onClick={this.changeBigList} />
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
          {small == true ?<>
            {products.map((el)=>(<ProductBox key={el.id}{...el}
            submit={this.handleAddProduct.bind(this)}/>))}
            </> :(<>{products.map((el) => (
              <HorizontalProductBox
                key={el.id}
                {...el}
                submit={this.handleAddProduct.bind(this)}
              />
            ))}</>)}
            
            
            
            {/* <HorizontalProductBox submit={this.handleAddProduct.bind(this)}/>
        <HorizontalProductBox submit={this.handleAddProduct.bind(this)}/>
        <HorizontalProductBox submit={this.handleAddProduct.bind(this)}/> */}
          </div>
        </section>
      );
  }
}

export default ProductCardShop;


