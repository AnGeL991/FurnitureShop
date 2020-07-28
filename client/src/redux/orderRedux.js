import reducer from "./globalRedux";

// selectors
export const getOrder =({order})=> order;
export const getOrderOptions=({}) =>order.options;
// action name creator
const reducerName ='order';
const createActionName = name=>`api/${reducerName}/${name}`;



export default function reducer(statePart=[],action={}){
    switch(action.type){
        
        default:
            return statePart;
    }
}