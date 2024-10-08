// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { login, register } from '../store/actions/authActions';
// import LoginForm from '../components/auth/LoginForm';
// import RegisterForm from '../components/auth/RegisterForm';
// import '../App.css'; // Make sure to create this CSS file

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const dispatch = useDispatch();
//   const error = useSelector(state => state.auth.error);

//   const handleLogin = (credentials) => {
//     dispatch(login(credentials));
//   };

//   const handleRegister = (userData) => {
//     dispatch(register(userData));
//   };

//   return (
//     <div className="auth-page">
//       <div className="auth-container">
//         <div className="auth-header">
//           <button
//             className={isLogin ? 'active' : ''}
//             onClick={() => setIsLogin(true)}
//           >
//             Log In
//           </button>
//           <button
//             className={!isLogin ? 'active' : ''}
//             onClick={() => setIsLogin(false)}
//           >
//             Sign Up
//           </button>
//         </div>
//         {error && <p className="error">{error}</p>}
//         {isLogin ? (
//           <LoginForm onSubmit={handleLogin} />
//         ) : (
//           <RegisterForm onSubmit={handleRegister} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default AuthPage;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../store/actions/authActions';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';
import Modal from '../components/common/Modal';
import '../App.css';

const AuthPage = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(false); // Controls whether LoginForm or RegisterForm is displayed
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  // Handle login functionality
  const handleLogin = (credentials) => {
    dispatch(login(credentials))
      .then(() => {
        // Close modal on successful login
        onClose();
      });
  };

  // Handle successful registration and switch to login
  const handleRegisterSuccess = () => {
    setIsLogin(true); // Switch to login form on successful registration
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="auth-container">
        <div className="auth-header">
          <button
            className={isLogin ? 'active' : ''}
            onClick={() => setIsLogin(true)}
          >
            Log In
          </button>
          <button
            className={!isLogin ? 'active' : ''}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>
        {error && <p className="error">{error}</p>}
        {isLogin ? (
          <LoginForm onSubmit={handleLogin} />
        ) : (
          <RegisterForm onRegisterSuccess={handleRegisterSuccess} /> // Pass callback to RegisterForm
        )}
      </div>
    </Modal>
  );
};

export default AuthPage;
