import axios from 'axios';

// Action Types
export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL';

export const FETCH_PRODUCT_DETAILS_START = 'FETCH_PRODUCT_DETAILS_START';
export const FETCH_PRODUCT_DETAILS_SUCCESS = 'FETCH_PRODUCT_DETAILS_SUCCESS';
export const FETCH_PRODUCT_DETAILS_FAIL = 'FETCH_PRODUCT_DETAILS_FAIL';

export const FETCH_RELATED_PRODUCTS_START = 'FETCH_RELATED_PRODUCTS_START';
export const FETCH_RELATED_PRODUCTS_SUCCESS = 'FETCH_RELATED_PRODUCTS_SUCCESS';
export const FETCH_RELATED_PRODUCTS_FAIL = 'FETCH_RELATED_PRODUCTS_FAIL';

export const SEARCH_PRODUCTS_START = 'SEARCH_PRODUCTS_START';
export const SEARCH_PRODUCTS_SUCCESS = 'SEARCH_PRODUCTS_SUCCESS';
export const SEARCH_PRODUCTS_FAIL = 'SEARCH_PRODUCTS_FAIL';

export const FETCH_FEATURED_PRODUCT_START = 'FETCH_FEATURED_PRODUCT_START';
export const FETCH_FEATURED_PRODUCT_SUCCESS = 'FETCH_FEATURED_PRODUCT_SUCCESS';
export const FETCH_FEATURED_PRODUCT_FAIL = 'FETCH_FEATURED_PRODUCT_FAIL';

// Action Creators
export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_START });
  try {
    const response = await axios.get('/api/products');
    dispatch({ 
      type: FETCH_PRODUCTS_SUCCESS, 
      payload: response.data 
    });
  } catch (error) {
    dispatch({ 
      type: FETCH_PRODUCTS_FAIL, 
      payload: error.response ? error.response.data : 'An error occurred while fetching products'
    });
  }
};

export const fetchProductDetails = (productId) => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCT_DETAILS_START });
  try {
    const response = await axios.get(`/api/products/${productId}`);
    dispatch({ 
      type: FETCH_PRODUCT_DETAILS_SUCCESS, 
      payload: response.data 
    });
  } catch (error) {
    dispatch({ 
      type: FETCH_PRODUCT_DETAILS_FAIL, 
      payload: error.response ? error.response.data : 'An error occurred while fetching product details'
    });
  }
};

export const fetchRelatedProducts = (categoryId) => async (dispatch) => {
  dispatch({ type: FETCH_RELATED_PRODUCTS_START });
  try {
    const response = await axios.get(`/api/products/related/${categoryId}`);
    dispatch({ 
      type: FETCH_RELATED_PRODUCTS_SUCCESS, 
      payload: response.data 
    });
  } catch (error) {
    dispatch({ 
      type: FETCH_RELATED_PRODUCTS_FAIL, 
      payload: error.response ? error.response.data : 'An error occurred while fetching related products'
    });
  }
};

export const searchProducts = (searchTerm) => async (dispatch) => {
  dispatch({ type: SEARCH_PRODUCTS_START });
  try {
    const response = await axios.get(`/api/products/search?q=${searchTerm}`);
    dispatch({ 
      type: SEARCH_PRODUCTS_SUCCESS, 
      payload: response.data 
    });
  } catch (error) {
    dispatch({ 
      type: SEARCH_PRODUCTS_FAIL, 
      payload: error.response ? error.response.data : 'An error occurred while searching products'
    });
  }
};

export const fetchFeaturedProduct = () => async (dispatch) => {
  dispatch({ type: FETCH_FEATURED_PRODUCT_START });
  try {
    const response = await axios.get('http://localhost:5000/api/products/featured');
    dispatch({ 
      type: FETCH_FEATURED_PRODUCT_SUCCESS, 
      payload: response.data 
    });
  } catch (error) {
    dispatch({ 
      type: FETCH_FEATURED_PRODUCT_FAIL, 
      payload: error.response ? error.response.data : 'An error occurred while fetching the featured product'
    });
  }
};
