import {combineReducers,createStore} from 'redux';
import ProductList from '../db/product.json';



const initialState ={
    product: ProductList,
    filters: {
        searchPhrase:' ',
        price: {
            from:100,
            to:9999,
        },
    },
    order:{
        product:null,
        title: '',
        price: '',
        options:{},
    },

}
// define reducers
const reducers ={
    initialState
}

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
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;