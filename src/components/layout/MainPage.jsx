import React from 'react';
import backImage from '../../assets/image.jpg';
import '../../App.css';

const MainPage = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
        <div className='bg-image' style={{ position: 'relative', height: '100vh' }}>
          <img src={backImage} className='img-fluid' alt='Sample' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className="text-center">
                <h1 className="display-1 text-light">Welcome to Our Store</h1>
                <p className="lead text-light">Explore the best products just for you!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MainPage;
