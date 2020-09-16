import { connect } from "react-redux";
import productCardShop from "./productCardShop";
import {
  getRequest,
  loadProductRequest,
  getMaxPriceOfProducts,
  getProductRange,
  getSortArray,
} from "../../../redux/productRedux";

const mapStateToProps = (state) => ({
  request: getRequest(state),
  maxPrice: getMaxPriceOfProducts(state),
  productRange: getProductRange(state),
  sortArray: getSortArray(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadProduct: () => dispatch(loadProductRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(productCardShop);
