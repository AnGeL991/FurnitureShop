import {combineReducers,createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';


// import reducers
import orderProduct from './orderRedux';
import category from './categoryRedux';

const reducers ={
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