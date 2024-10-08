import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { register } from '../../store/actions/authActions';

const RegisterForm = ({ onRegisterSuccess }) => { // Accept onRegisterSuccess prop
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userData))
      .then(() => {
        alert('Registration successful! Please log in.');
        onRegisterSuccess(); // Call the function to switch to login form
      })
      .catch((err) => {
        alert('Registration failed. Please try again.');
      });
  };

  return (
    <div className="auth-form register-form">
      <h2>Sign Up</h2>
      {/* <div className="auth-options">
        <button className="google-auth">
          <FaGoogle /> Sign up with Google
        </button>
      </div>
      <div className="separator">or</div> */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="User name"
          value={userData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="john@example.com"
          value={userData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="your password"
          value={userData.password}
          onChange={handleChange}
          required
        />
        <div className="terms">
          By signing up, you agree to our terms of service and privacy policy
        </div>
        <button type="submit" className="submit-btn">
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
