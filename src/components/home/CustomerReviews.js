import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../App.css'; // Import custom CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const CustomerReviews = () => {
  const { id } = useParams(); // Get product ID from the URL
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/product/${id}/reviews`);
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [id]);

  return (
    <div className="customer-reviews container text-center">
      <h2 className="customer-reviews-heading mb-4">What Our Customers Say</h2>

      {loading && (
        <div className="loading-message">
          <div className="spinner-border spinner-border-sm text-primary" role="status" aria-hidden="true"></div>
          <span> Loading reviews...</span>
        </div>
      )}

      {/* {error && (
        <div className="error-message alert alert-danger" role="alert">
          <i className="bi bi-exclamation-triangle-fill"></i> Error: {error}
        </div>
      )} */}

      {reviews.length > 0 && (
        <ul className="review-list list-unstyled">
          {reviews.map((review, index) => (
            <li key={index} className="review-item border-bottom py-3">
              <div className="review-content">
                <p className="review-text mb-1">{review.comment}</p>
              </div>
              <div className="review-meta d-flex justify-content-between align-items-center">
                <span className="reviewer-name font-weight-bold">{review.name}</span>
                <span className="review-rating text-warning">
                  {'★'.repeat(review.rating)}
                </span>
                <span className="review-date text-muted">{new Date(review.date).toLocaleDateString()}</span>
              </div>
            </li>
          ))}
        </ul>
      )}

      {reviews.length === 0 && !loading && (
        <div className="no-reviews-message alert alert-info">
          <i className="bi bi-info-circle-fill"></i> No reviews available for this product.
        </div>
      )}
    </div>
  );
};

export default CustomerReviews;
