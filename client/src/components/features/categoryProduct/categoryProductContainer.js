import { connect } from "react-redux";
import categoryProduct from "./categoryProduct";

import { getCategory, addCategory } from "../../../redux/categoryRedux";
import {
  setSearchValues,
  getMaxPriceOfProducts,
  setMinPriceValues,
  getMinPriceProduct,
} from "../../../redux/productRedux";

const mapStateToProps = (state) => ({
  categories: getCategory(state),
  maxPrice: getMaxPriceOfProducts(state),
  minPrice: getMinPriceProduct(state),
});

const mapDispatchToProps = (dispatch) => ({
  addCategories: (id) =>
    dispatch(
      addCategory({
         id,
      })
    ),
  searchValue: (type, value) =>
    dispatch(
      setSearchValues({
        type,
        value,
      })
    ),
  setPriceValue: (value) =>
    dispatch(
      setMinPriceValues({
        value,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(categoryProduct);
