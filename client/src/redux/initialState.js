const initialState = {
  product:{  
    data: [],
    request: {
      pending: false,
      error: null,
      success: null,
    },
    SearchValues: {
      search: '',
    },},
  order:[],
  categories: {
    category:'',
  },
  errorId:null,
};


export default initialState;
