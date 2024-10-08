import React from 'react';
import TrustImage from '../../assets/E-Commerce.jpg';
// import '../../App.css';

const QutesTrust = () => {
    return (
        <div>
            <div className="d-flex flex-column min-vh-100">
            <div className='bg-image' style={{ position: 'relative', height: '100vh' }}>
                <img 
                    src={TrustImage} 
                    className='img-fluid' 
                    alt='sam' 
                    style={{ width: '100%', objectFit: 'cover' }} 
                />
                {/* Text on the left half of the image */}
                <div className='position-absolute' style={{ top: '50%', left: '0', transform: 'translateY(-50%)', width: '50%', padding: '20px', color: 'white', textAlign: 'left' }}>
                    <h3>
                        "Trusted by thousands of satisfied customers, we offer high-quality printers from top brands with secure and reliable shopping. Backed by expert support and fast delivery for a seamless experience."
                    </h3>
                </div>
            </div>
        </div>

        </div>
        
    );
};

export default QutesTrust;
