import { connect } from "react-redux";
import productCardShop from "./productCardShop";
//import { getOrderProduct } from "../../../redux/orderRedux";
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
  loadProduct: () => dispatch(loadProductRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(productCardShop);
