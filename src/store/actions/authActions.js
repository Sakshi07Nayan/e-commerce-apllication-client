import axios from 'axios';
const api = axios.create({
  baseURL: 'https://e-commerce-application-server.vercel.app/',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include token in all requests
  },
});
 
export const login = (credentials) => async (dispatch) => {
  try {
    const res = await axios.post('https://e-commerce-application-server.vercel.app/api/users/login', credentials);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    return Promise.resolve(); // Resolve promise on success
  } catch (error) {
    const errorMessage = error.response ? error.response.data : 'Login failed';
    dispatch({ type: 'LOGIN_FAIL', payload: errorMessage });
    return Promise.reject(errorMessage); // Reject promise with error message
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    const res = await axios.post('https://e-commerce-application-server.vercel.app/api/users/register', userData);
    dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
    return Promise.resolve();
  } catch (error) {
    dispatch({ type: 'REGISTER_FAIL', payload: error.response.data });
    return Promise.reject();
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('token'); // Remove the token if stored in localStorage
  dispatch({ type: 'LOGOUT_SUCCESS' });
};

export const googleAuth = () => async (dispatch) => {
  try {
    const res = await api.get(`/auth/google`); // Make sure your backend route is correctly defined
    dispatch({ type: 'GOOGLE_LOGIN_SUCCESS', payload: res.data }); // Update Redux state
  } catch (error) {
    dispatch({ type: 'GOOGLE_LOGIN_FAIL', payload: error.response.data });
    throw new Error(error); // Rethrow to catch in the redirect handler
  }
};

// export const googleAuth = (token) => async (dispatch) => {
//   try {
//     // Assuming you have an API that verifies the token
//     const res = await api.post(`/auth/verifyToken`, { token });

//     dispatch({ type: 'GOOGLE_LOGIN_SUCCESS', payload: res.data });
//   } catch (error) {
//     dispatch({ type: 'GOOGLE_LOGIN_FAIL', payload: error.response.data });
//   }
// };
