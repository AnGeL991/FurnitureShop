const settings = {
    db: {
    API_URL: (process.env.NODE_ENV === 'production') ? '/api' : 'http://localhost:3000/api',
      endpoint: {
        orders: 'orders',
      },
    },
    hours: {
      open:10,
      close:22,
    },
  };
    
  export default settings;