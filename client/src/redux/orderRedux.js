import initialState from "./initialState";

/*Selektors */
export const getOrderProduct = ({ order }) => order;

const reducerName = "order";
const createActionName = name => `api/${reducerName}/${name}`;

const ADD_TO_BASKET = createActionName("ADD_TO_BASKET");
const REMOVE_FROM_BASKET = createActionName("REMOVE_FROM_BASKET");

export const addToBasket = payload=>({payload,type: ADD_TO_BASKET});
export const removeFromBasekt = payload =>({payload,type:REMOVE_FROM_BASKET});

/*reducer*/
export default function reducer(statePart = initialState.order, action ) {
  switch (action.type) {
    case ADD_TO_BASKET: {
      return [...statePart, { ...action.payload, id: action.payload._id }]
    }; 
    case REMOVE_FROM_BASKET: {
      console.log(statePart);
      return statePart.filter(product=> product._id !== action.payload.id)
    }
    default:
      return statePart;
  }
}
