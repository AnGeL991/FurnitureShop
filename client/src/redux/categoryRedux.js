import initialState from "./initialState";

/* Selectors */
export const getCategory = ({ categories }) => categories;

const reducerName = "categories";
const createActionName = (name) => `api/${reducerName}/${name}`;

const ADD_CATEGORY= createActionName("ADD_CATEGORY");
const REMOVE_CATEGORY = createActionName("REMOVE_CETEGORY")
export const addCategory = (payload) => ({
  payload,
  type: ADD_CATEGORY,
});


/*Reducer */
export default function reducer(statePart = initialState.categories, action={}) {
  switch (action.type) {
    case ADD_CATEGORY :
      return {...statePart,category:action.payload,}
    default:
      return statePart;
  }
}
