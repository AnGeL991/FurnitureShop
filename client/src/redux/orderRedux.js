import initialState from "./initialState";

/*Selektors */
export const getOrderProduct = ({ order }) => order;

const reducerName = "order";
const createActionName = name => `api/${reducerName}/${name}`;

const ADD_TO_BASKET = createActionName("ADD_TO_BASKET");
const REMOVE_FROM_BASKET = createActionName("REMOVE_FROM_BASKET");
const REMOVE= createActionName("REMOVE");
const UPDATE_ITEM = createActionName("UPDATE_ITEM");
const SHOW_LOADING = createActionName("SHOW_LOADING");
const HIDE_LOADING =createActionName("HIDE_LOADING");
const ADD_ITEM = createActionName("ADD_ITEM");

export const addToBasket = payload=>(
  {
  type: ADD_TO_BASKET,
  payload,

});
export const updateOrderProduct =product=>dispatch=>{
  dispatch({type:SHOW_LOADING,payload:500});
  setTimeout(()=>{
    dispatch({
      type:UPDATE_ITEM,
      payload:product,
    });
    dispatch({type:HIDE_LOADING});
  },500);
};

export const addItem = product =>dispatch =>{
  if(product.order.some(({_id})=> _id ===product.id)){
    const updatedProduct={
      ...product,
      amoung: product.amount +1,
    };
    dispatch(updateOrderProduct(updatedProduct));
  } else {
    dispatch({type:SHOW_LOADING,payload:500});
    setTimeout(()=>{
      dispatch({
        type:UPDATE_ITEM,
        payload:product,
      });
      dispatch({type:HIDE_LOADING});
    },500);
  }
};

export const removeFromBasekt = payload =>({
  payload,type:REMOVE_FROM_BASKET

});
export const removeOrderProduct = productId => dispatch=>{
  dispatch({type:SHOW_LOADING,payload:500});
  setTimeout(()=>{
    dispatch({
      type:REMOVE,
      payload:{
        productId
      },
    });
    dispatch({type:HIDE_LOADING});
  },500)
} 
/*reducer*/
export default function reducer(statePart = initialState.order, action={} ) {
  switch (action.type) {
    case ADD_TO_BASKET: {
      const some = statePart.some(item=>item._id ===action.payload._id);
      if(some === true)
      {
        return  statePart.map(item =>(item._id===action.payload._id)?{...item,amount:item.amount+1}: item) 
      }else 
      return [...statePart, { ...action.payload, id: action.payload._id }]
    }; 
    case REMOVE_FROM_BASKET: {
      console.log(statePart);
      return statePart.filter(product=> product._id !== action.payload.id)
    }
    case ADD_ITEM:
      return {
        ...statePart,
        [action.payload.order]:[
          ...statePart[action.payload.order],
          action.payload.product
        ]
      }
    case UPDATE_ITEM: {
    return {
    ...statePart,
         order:statePart.order.map(product =>
           product.id ===action.payload.id? action.payload : product),
      };
    }
    case REMOVE :{
      return {
        ...statePart,
        order: statePart.order.filter(({id})=>id!== action.payload.productId)
      };
    }
    default:
      return statePart;
  }
}
