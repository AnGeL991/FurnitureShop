import {combineReducers,createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';

// import reducers
import orderProduct from './orderRedux';
import category from './categoryRedux';
import product from './productRedux';

const reducers ={
    product,
    orderProduct,
    category,
   
}

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
    combinedReducers,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);
export default store;