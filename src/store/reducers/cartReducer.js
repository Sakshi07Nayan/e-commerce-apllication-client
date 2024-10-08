import { ADD_TO_CART, REMOVE_FROM_CART, SET_CART } from '../actions/actionTypes';

const initialState = {
  items: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      const total = action.payload.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      return { ...state, items: action.payload, total };

    case ADD_TO_CART:
      const updatedCart = [...state.items, action.payload];
      const updatedTotal = updatedCart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      return { ...state, items: updatedCart, total: updatedTotal };

    case REMOVE_FROM_CART:
      const filteredCart = state.items.filter(item => item.product_id !== action.payload);
      const newTotal = filteredCart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      return { ...state, items: filteredCart, total: newTotal };

    default:
      return state;
  }
};

export default cartReducer;
