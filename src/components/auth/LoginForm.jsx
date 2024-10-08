import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

const LoginForm = ({ onSubmit }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  // Redirect to backend Google OAuth route
  const handleGoogleLogin = () => {
    window.location.href = "https://e-commerce-application-server.vercel.app/auth/google"; // Your backend Google login route
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(credentials);
  };

  return (
    <div className="auth-form login-form">
      <h2>E-commerce</h2>
      <div className="auth-options">
        {/* Trigger the Google login process */}
        <button className="google-auth" onClick={handleGoogleLogin}>
          <FaGoogle /> Sign in with Google
        </button>
      </div>
      <div className="separator">or</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="your password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <div className="forgot-password">
          <a href="/forgot-password">Don't remember your password?</a>
        </div>
        <button type="submit" className="submit-btn">
          LOG IN
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
