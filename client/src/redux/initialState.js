const initialState = {
  product:{  
    data: [],
    request: {
      pending: false,
      error: null,
      success: null,
    },
    option: {
      defaultSort: true,
      maxPriceSort:false,
      minPriceSort:false,
      popularitySort:false,
      newsProductSort:false,
    },
    search: '',
    maxPrice:0,
    minPrice:0,
  },
  categories: {category: ''},
  order:[],
  errorId:null,
};


export default initialState;
