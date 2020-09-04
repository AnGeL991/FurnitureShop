import axios from "axios";
import { API_URL } from "../config";

// selectors
export const getOrder = ({ orderProduct }) => orderProduct.data;
export const getRequest = ({ orderProduct }) => orderProduct.request;
export const getOrderLenght = ({ orderProduct }) => orderProduct.data.lenght;

// action name creator
const reducerName = "order";
const createActionName = (name) => `api/${reducerName}/${name}`;
const START_REQUEST = createActionName("START_REQUEST");
const END_REQUEST = createActionName("END_REQUEST");
const ERROR_REQUEST = createActionName("ERROR_REQUEST");

const LOAD_ORDERS = createActionName("LOAD_ORDERS");
const ADD_PRODUCT = createActionName("ADD_PRODUCT");
const SHOW_LOADING = createActionName("SHOW_LOADING");
const HIDE_LOADING = createActionName("HIDE_LOADING");
const REMOVE_CART_ITEM = createActionName("REMOVE_CART_ITEM");

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = (error) => ({ error, type: ERROR_REQUEST });

export const loadOrders = (payload) => ({
  payload,
  type: LOAD_ORDERS,
});
export const addProduct = (payload) => ({
  payload,
  type: ADD_PRODUCT,
});
export const removeProduct = (payload) => ({
  payload,
  type: REMOVE_CART_ITEM,
});

export const loadOrderRequest = () => {
  return async (dispatch) => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/order`);
      dispatch(loadOrders(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const addProductRequest = (order) => {
  return async (dispatch) => {
    dispatch(startRequest({ name: "ADD_PRODUCT" }));
    try {
      let res = await axios.post(`${API_URL}/order`, order);
      dispatch(addProduct(res));
      dispatch(endRequest({ name: "ADD_PRODUCT" }));
    } catch (e) {
      dispatch(errorRequest({ name: "ERROR_REQUEST", error: e.message }));
    }
  };
};

export const removeCartItem = (itemId, orderBox, size = "") => (dispatch) => {
  dispatch({ type: SHOW_LOADING, payload: 1000 });
  setTimeout(() => {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: {
        itemId,
        size,
        orderBox,
      },
    });
    dispatch({ type: HIDE_LOADING });
  }, 1000);
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
    case LOAD_ORDERS:
      return { ...statePart, data: [...action.payload] };
    case ADD_PRODUCT:
      return { ...statePart, data: [...statePart.data, action.payload] };
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
