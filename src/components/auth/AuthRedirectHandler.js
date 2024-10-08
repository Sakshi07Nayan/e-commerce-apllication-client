// import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const useQuery = () => {
//   return new URLSearchParams(useLocation().search);
// };

// function AuthRedirectHandler() {
//   const query = useQuery();
//   const token = query.get('token'); // Get token from the URL query

//   useEffect(() => {
//     if (token) {
//       // Store token in localStorage
//       localStorage.setItem('token', token);

//       // Dispatch Google login success action
//       window.location.href = '/dashboard'; // Redirect to the dashboard after storing the token
//     } else {
//       // If no token, redirect to the login page
//       window.location.href = '/'; // Or handle unauthorized cases
//     }
//   }, [token]);

//   return null; // No UI needed for this redirect
// }

// export default AuthRedirectHandler;

// AuthRedirectHandler.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { googleAuth } from '../../store/actions/authActions'; // Import your googleAuth action
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthRedirectHandler = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const authenticateUser = async () => {
      await dispatch(googleAuth()); // Call your Google auth action
      if (isAuthenticated) {
        console.log("User is authenticated, redirecting to /dashboard");
        navigate('/dashboard'); // Navigate to the dashboard after successful authentication
      } else {
        console.log("User not authenticated, redirecting to /");
        navigate('/'); // Redirect to home if not authenticated
      }
    };
    authenticateUser();
  }, [dispatch, navigate]);

  return <div>Loading...</div>; // Optional loading state
};

export default AuthRedirectHandler;
