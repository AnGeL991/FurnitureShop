const initialState = {
  product:{  
    data: [],
    request: {
      pending: false,
      error: null,
      success: null,
    },
    search: '',
  },
  categories: '',
  order:[],
 
  errorId:null,
};


export default initialState;
