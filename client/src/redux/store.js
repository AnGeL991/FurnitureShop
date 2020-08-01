import {combineReducers,createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';

// add black reducers for initial state properies without reducers

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