import { API_URL } from "../config";
import axios from "axios";

/* Selectors */
export const getAllProducts = ({ product }) => product.data;
export const getRequest = ({ product  }) => product.request;
// export const getFilteredProducts = ({ products, filters }) => {
//   let output = products;

//   //filter by searchPhrase
//   if (filters.searchPhrase) {
//     const pattern = new ReqExp(filters.searchPhrase, "i");
//     output = output.filter((product) => pattern.test(product.name));
//   }

//   return output.reverse();
// };
// export const getProductById = ({ products }, productId) => {
//   const filtered = products.filter(function (product) {
//     return (product.id = productID);
//   });
//   console.log("filtering prodducts by productId:", productId, filtered);
//   return filtered.length ? filtered[0] : { error: true };
// };

const reducerName = "products";
const createActionName = (name) => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName("START_REQUEST");
const END_REQUEST = createActionName("END_REQUEST");
const ERROR_REQUEST = createActionName("ERROR_REQUEST");

const LOAD_PRODUCT = createActionName("LOAD_PRODUCT");

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

const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null,
  },
};
export default function reducer(statePart = initialState, action = {}) {
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
    default:
      return statePart;
  }
}
