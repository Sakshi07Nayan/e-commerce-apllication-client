import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux';
import { addToCartApi } from '../../store/actions/cartActions';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import CustomerReviews from '../home/CustomerReviews';
import Chatbot from '../common/Chatbot';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const userId = useSelector((state) => state.auth.userId); 
  const userId = localStorage.getItem('userId');

 useEffect(() => {
  console.log("UserId from props:", userId); // Check if userId is available
  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://e-commerce-application-server.vercel.app/api/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };
  fetchProduct();
}, [id, userId]);


  if (!product) {
    return <div>Loading product details...</div>;
  }

  const handleAddToCart = () => {
    if (userId) {
      dispatch(addToCartApi(userId, product));
      navigate('/cart');  // Redirect to cart after adding the product
    } else {
      // Optionally show a login prompt if the user is not logged in
      alert('Please log in to add items to the cart');
    }
  };
  return (
    <div>
      <div className="container mt-5">
        <div className="shadow p-3 mb-5 bg-white rounded">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={product.image_url}
                alt={product.name}
                className="img-fluid rounded-start"
                style={{ height: '250px', objectFit: 'cover' }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body" style={{ margin: '0 20px' }}>
                <h2 className="card-title">{product.name}</h2>
                <hr />
                <p className="card-text text-muted">{product.description}</p>
                <p className="card-text"><strong>Price: ${product.price}</strong></p>
                <button className="btn btn-primary" onClick={handleAddToCart}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomerReviews />
      <Chatbot />
    </div>
  );
};

export default ProductDetail;
