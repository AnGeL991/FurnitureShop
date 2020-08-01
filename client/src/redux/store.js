import {combineReducers,createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';

// add black reducers for initial state properies without reducers
Object.keys(initialState).forEach(item => {
    if(typeof reducers[item] == 'undefined'){
        reducers[item] = (statePart =null)=>statePart;
    };
});

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