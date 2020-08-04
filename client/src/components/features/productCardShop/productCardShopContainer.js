import { connect } from "react-redux";
import productCardShop from "./productCardShop";
import { addProductRequest } from "../../../redux/orderRedux";
import {
  getAllProducts,
  getRequest,
  loadProductRequest,
} from "../../../redux/productRedux";

const mapStateToProps = (state) => ({
  products: getAllProducts(state),
  request: getRequest(state),
});
const mapDispatchToProps = (dispatch) => ({
  addProduct: (payload) => dispatch(addProductRequest(payload)),
  loadProduct: () => dispatch(loadProductRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(productCardShop);
