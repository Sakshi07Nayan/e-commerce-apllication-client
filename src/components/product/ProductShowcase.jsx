import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom'; // Import useHistory for navigation

const ProductShowcase = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Use useHistory to handle navigation

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: products.length > 4,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Function to navigate to ProductDetail page
  const handleProductClick = (id) => {
    navigate(`/products/${id}`); // Call navigate directly with the path
  };
  
  if (products.length === 0) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="slider-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <Slider {...settings}>
        {products.map(product => (
          <div 
            key={product.id} 
            className="product-slide" 
            style={{ padding: '0 10px', cursor: 'pointer' ,margin: '10px 0'}} 
            onClick={() => handleProductClick(product.id)} // Handle click event to navigate
          >
            <img 
              src={product.image_url} 
              alt={product.name} 
              style={{
                width: '100%',
                height: '10rem',
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'transform 0.3s ease-in-out', // Smooth transition
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} // Scale up on hover
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} // Reset on mouse leave
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductShowcase;
