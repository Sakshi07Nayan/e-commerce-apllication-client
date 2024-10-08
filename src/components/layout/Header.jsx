import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch for logout action
import SearchBar from '../common/SearchBar';
import companyLogo from '../../assets/icon.png';
import AuthPage from '../../pages/AuthPage';
import { logout } from '../../store/actions/authActions'; // Import logout action

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch(); // Initialize dispatch
  const navigate = useNavigate();

  // Retrieve isAuthenticated from the Redux store
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  // Function to handle logout
  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    navigate('/')

  };
  const handlecart=()=>{
    navigate('/cart')
  }

  return (
    <>
      <header className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={companyLogo} alt="Company Logo" className="img-fluid" style={{ height: 60 }} />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <nav className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/products" className="nav-link">Products</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </nav>

            <SearchBar />

            <div className="d-flex align-items-center">
              {isAuthenticated ? (
                <>
                  <span className="nav-link mx-2">{user?.name}</span> &nbsp;&nbsp;&nbsp;
                  <button className="btn btn-outline-primary" onClick={handlecart}>Cart</button>&nbsp;&nbsp;
                  <button onClick={handleLogout} className="btn btn-outline-danger">
                    Logout
                  </button>
                </>
              ) : (
                <button onClick={handleModalOpen} className="btn btn-outline-primary me-2">
                  Login/Signup
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <AuthPage isOpen={isModalOpen} onClose={handleModalClose} />
    </>
  );
};

export default Header;
