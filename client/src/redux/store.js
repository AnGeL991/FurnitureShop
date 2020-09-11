import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import initialState from "./initialState";
// import reducers
import orderProduct from "./orderRedux";
import categories from "./categoryRedux";
import product from "./productRedux";

const reducers = {
  product :product,
  categories: categories,
  order: orderProduct
};

Object.keys(initialState).forEach((item) => {
  if (typeof reducers[item] == "undefined") {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);
export default store;
