export const initialState = {
  products: [],
  cart: [],
  searchValues: {
    search: "",
    categories: [],
  },
  request:{
    pending: false,
    error: null,
    success: null,
  },
  errorId:null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
