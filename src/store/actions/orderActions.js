import axios from 'axios';

export const fetchUserOrders = () => async (dispatch) => {
  dispatch({ type: 'FETCH_USER_ORDERS_START' });
  try {
    const res = await axios.get('/api/orders');
    dispatch({ type: 'FETCH_USER_ORDERS_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'FETCH_USER_ORDERS_FAIL', payload: error.response.data });
  }
};