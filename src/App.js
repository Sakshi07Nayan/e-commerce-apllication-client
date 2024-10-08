import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import MainPage from './components/layout/MainPage';
import ProductDetail from './components/product/ProductDetails';
import ContactSection from './components/home/ContactSection';
import PrivateRoute from './components/privateRoute';
import AuthRedirectHandler from './components/auth/AuthRedirectHandler';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route
          path="/"
          element={
            <>
              <Header />
              {isAuthenticated ? <Navigate to="/dashboard" /> : <MainPage />} {/* Redirect to dashboard if authenticated */}
              <Footer />
            </>
          }
        />

        {/* Google OAuth Redirect Handler */}
        <Route path="/auth/google/callback" element={<AuthRedirectHandler />} />

        {/* Protected Dashboard Route */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Header />
              <HomePage /> {/* HomePage represents the dashboard */}
              <Footer />
            </PrivateRoute>
          }
        />

        {/* Other Protected Routes */}
        <Route
          path="/products/:id"
          element={
            <PrivateRoute>
              <Header />
              <ProductDetail />
              <Footer />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Header />
              <CartPage />
              <ContactSection />
            </PrivateRoute>
          }
        />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
