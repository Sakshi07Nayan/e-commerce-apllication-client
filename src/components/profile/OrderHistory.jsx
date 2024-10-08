import React from 'react';
import { Link } from 'react-router-dom';

const OrderHistory = ({ orders }) => {
  return (
    <div className="order-history">
      <h2>Order History</h2>
      {orders.length === 0 ? (
        <p>You haven't placed any orders yet.</p>
      ) : (
        <ul>
          {orders.map(order => (
            <li key={order.id}>
              <Link to={`/order/${order.id}`}>
                Order #{order.id} - {new Date(order.createdAt).toLocaleDateString()}
              </Link>
              <span>Total: ${order.total.toFixed(2)}</span>
              <span>Status: {order.status}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;