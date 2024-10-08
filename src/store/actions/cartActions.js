import axios from 'axios';
import { ADD_TO_CART, REMOVE_FROM_CART, SET_CART } from './actionTypes';

// Fetch Cart
export const fetchCart = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/cart/${userId}`);
    dispatch({ type: SET_CART, payload: response.data });
  } catch (error) {
    console.error('Error fetching cart:', error);
  }
};

// Add to Cart
// cartActions.js
export const addToCartApi = (userId, product) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/cart`, {
      userId,
      productId: product.id,
      quantity: 1,
    });
    
    dispatch({
      type: 'ADD_TO_CART',
      payload: response.data, // Ensure your backend returns the updated cart data
    });
  } catch (error) {
    console.error("Error adding to cart:", error);
    // Optionally handle error with a toast or notification
  }
};


// Remove from Cart
export const removeFromCartApi = (userId, productId) => async (dispatch) => {
  try {
    await axios.delete(`/api/cart/${userId}/items/${productId}`);
    dispatch({ type: REMOVE_FROM_CART, payload: productId });
  } catch (error) {
    console.error('Error removing product from cart:', error);
  }
};
