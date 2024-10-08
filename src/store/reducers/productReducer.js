const initialState = {
    featured: [], // Initialize as an empty array to avoid undefined error
    // Other product state fields
  };
  
  export default function productReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_FEATURED_PRODUCT_SUCCESS':
        return {
          ...state,
          featured: action.payload, // Update featured products when fetched
        };
      // Other cases
      default:
        return state;
    }
  }