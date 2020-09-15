import axios from "axios";
import { API_URL } from "../config";
import initialState from "./initialState";

/* Selectors */
export const getAllProducts = ({ product }) => product.data;
export const getRequest = ({ product }) => product.request;
export const getMaxPriceOfProducts = ({ product, categories }) => {
  let productPrice;
  if (product.search === "" && categories.category === "") {
    const maxPrice = product.data.map((item) => item.price);
    productPrice = Math.max(...maxPrice);
  } else if (product.search !== "") {
    const arrayOfProduct = product.data.filter((item) =>
      new RegExp(product.search, "i").test(item.title)
    );
    const maxPrice = arrayOfProduct.map((item) => item.price);
    productPrice = Math.max(...maxPrice);
  } else if (categories.category !== "") {
    const arrayOfProduct = product.data.filter(
      (item) => item.category === categories.category
    );
    const MaxPrice = arrayOfProduct.map((item) => item.price);
    productPrice = Math.max(...MaxPrice);
  }
  return productPrice;
};
export const getMinPriceProduct = ({ product }) => product.minPrice;
export const getProductRange = ({ product, categories }) => {
  let arrayOfProduct;
  if (product.search === "" && categories.category === "") {
    arrayOfProduct = product.data.filter(
      (item) => item.price >= product.minPrice
    );
    console.log(arrayOfProduct);
  } else if (product.search !== "") {
    const arrayOfSearchProduct = product.data.filter((item) =>
      new RegExp(product.search, "i").test(item.title)
    );
    arrayOfProduct = arrayOfSearchProduct.filter(
      (item) => item.price >= product.minPrice
    );
  } else if (categories.category !== "") {
    const arrayOfCategoryProduct = product.data.filter(
      (item) => item.category === categories.category
    );

    arrayOfProduct = arrayOfCategoryProduct.filter(
      (item) => item.price >= product.minPrice
    );
  }

  console.log("range", arrayOfProduct);
  return arrayOfProduct;
};

const reducerName = "products";
const createActionName = (name) => `api/${reducerName}/${name}`;

const START_REQUEST = createActionName("START_REQUEST");
const END_REQUEST = createActionName("END_REQUEST");
const ERROR_REQUEST = createActionName("ERROR_REQUEST");

const LOAD_PRODUCT = createActionName("LOAD_PRODUCT");
const SET_SEARCH_VALUE = createActionName("SET_SEARCH_VALUE");
const SET_MIN_PRICE_VALUE = createActionName("SET_MAX_PRICE_VALUE");
const SET_OPTION_OF_SORT = createActionName("SET_OPTION_OF_SORT");

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = (error) => ({ error, type: ERROR_REQUEST });

export const loadProduct = (payload) => ({
  payload,
  type: LOAD_PRODUCT,
});

export const loadProductRequest = () => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/products`);
      dispatch(loadProduct(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const setMinPriceValues = (payload) => {
  return {
    type: SET_MIN_PRICE_VALUE,
    payload,
  };
};

export const setSearchValues = (type, value) => {
  return {
    type: SET_SEARCH_VALUE,
    payload: {
      type,
      value,
    },
  };
};
export const setOptionSort=(payload)=>{
  return{
    type:SET_OPTION_OF_SORT,
    payload,
  }
}
export default function reducer(statePart = initialState.product, action) {
  switch (action.type) {
    case LOAD_PRODUCT:
      return { ...statePart, data: [...action.payload] };
    case START_REQUEST:
      return {
        ...statePart,
        request: {
          pending: true,
          error: null,
          success: false,
        },
      };
    case END_REQUEST:
      return {
        ...statePart,
        request: {
          pending: false,
          error: null,
          success: true,
        },
      };
    case ERROR_REQUEST:
      return {
        ...statePart,
        request: {
          pending: false,
          error: action.error,
          success: false,
        },
      };

    case SET_SEARCH_VALUE:
      return {
        ...statePart,
        [action.payload.type.type]: action.payload.type.value,
      };
    case SET_MIN_PRICE_VALUE:
      return {
        ...statePart,
        minPrice: parseInt(action.payload.value),
      };
    case SET_OPTION_OF_SORT: {
      return {
        ...statePart,
        option: {
          defaultSort: action.payload.name === 'defaultSort' ? true : false,
          maxPriceSort: action.payload.name === 'maxPriceSort' ? true : false,
          minPriceSort: action.payload.name === 'minPriceSort' ? true : false,
          popularitySort: action.payload.name === 'popularitySort' ? true : false,
          newsProductSort: action.payload.name === 'newsProductSort' ? true : false,
        },
      };
    }
    default:
      return statePart;
  }
}
