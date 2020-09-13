import { connect } from "react-redux";
import productCardShop from "./productCardShop";
import { getCategory } from "../../../redux/categoryRedux";
import {
  getAllProducts,
  getRequest,
  loadProductRequest,
  getProductBySearch
} from "../../../redux/productRedux";

const mapStateToProps = (state) => ({
  products: getAllProducts(state),
  request: getRequest(state),
  category: getCategory(state),
  searchProduct:getProductBySearch(state),
});
const mapDispatchToProps = (dispatch) => ({
  loadProduct: () => dispatch(loadProductRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(productCardShop);
