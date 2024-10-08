import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart, removeFromCartApi } from '../store/actions/cartActions';
import Chatbot from '../components/common/Chatbot';

const Cart = ({ userId }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);
    const total = useSelector((state) => state.cart.total);

    useEffect(() => {
        if (userId) {
            dispatch(fetchCart(userId));
        }
    }, [userId, dispatch]);

    const removeFromCart = (productId) => {
        dispatch(removeFromCartApi(userId, productId));
    };

    return (
      <div>
        <div className="container mt-5">
            <h2 className="text-center mb-4">Your Cart</h2>
            {cart.length === 0 ? (
                <p className="text-center">Your cart is empty</p>
            ) : (
                <ul className="list-group">
                    {cart.map((product) => (
                        <li className="list-group-item d-flex align-items-center border rounded mb-3 shadow-sm" key={product.product_id}>
                            <img 
                                src={product.image_url}
                                alt={product.name} 
                                style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '15px' }} 
                            />
                            <div className="flex-grow-1">
                                <h5 className="mb-1">{product.name}</h5>
                                <p className="mb-1"><strong>Price:</strong> ${product.price}</p>
                                <p className="mb-1"><strong>Quantity:</strong> {product.quantity}</p>
                            </div>
                            <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(product.product_id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            {cart.length > 0 && (
                <div className="text-right mt-4">
                    <h4>Total: <span className="text-success">${total.toFixed(2)}</span></h4>
                </div>
            )}
        </div>
        <Chatbot/>
        </div>
    );
};

export default Cart;
