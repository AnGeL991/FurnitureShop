import axios from "axios";
import { API_URL } from "../config";
import initialState from './initialState';

/* Selectors */
export const getAllProducts = ({ product }) => product.data;
export const getRequest = ({ product }) =>product.request;
export const getProductBySearch =({product}) =>{
  product.data.filter(products => new RegExp(product.search, 'i').test(products.title));
};





const reducerName = "products";
const createActionName = (name) => `api/${reducerName}/${name}`;

const START_REQUEST = createActionName("START_REQUEST");
const END_REQUEST = createActionName("END_REQUEST");
const ERROR_REQUEST = createActionName("ERROR_REQUEST");

const LOAD_PRODUCT = createActionName("LOAD_PRODUCT");
const SET_SEARCH_VALUE = createActionName("SET_SEARCH_VALUE");

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

export const setSearchValues = (type, value) => {
  return {
    type: SET_SEARCH_VALUE,
    payload: {
      type,
      value,
    },
 
  };
};
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
      return  {...statePart,
        [action.payload.type.type]:action.payload.type.value,}
    default:
      return statePart;
  }
}
