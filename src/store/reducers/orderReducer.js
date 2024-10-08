const initialState = {
    orders: [],
    loading: false,
    error: null,
  };
  
  export default function orderReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_USER_ORDERS_START':
        return { ...state, loading: true, error: null };
      case 'FETCH_USER_ORDERS_SUCCESS':
        return { ...state, orders: action.payload, loading: false, error: null };
      case 'FETCH_USER_ORDERS_FAIL':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  }