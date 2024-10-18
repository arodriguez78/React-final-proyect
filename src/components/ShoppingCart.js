// src/components/ShoppingCart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity } from '../redux/actions/cartActions';

const ShoppingCart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleIncrease = (item) => {
        dispatch(increaseQuantity(item));
    };

    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            dispatch(decreaseQuantity(item));
        }
    };

    return (
        <div className="shopping-cart">
            <h2>Your Shopping Cart</h2>
            <p>Total Items: {cart.totalItems}</p>
            <p>Total Cost: ${cart.totalCost.toFixed(2)}</p>
            {cart.items.length > 0 ? (
                cart.items.map(item => (
                    <div key={item.id}>
                        <h4>{item.name}</h4>
                        <p>Price: ${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => handleIncrease(item)}>Increase</button>
                        <button onClick={() => handleDecrease(item)}>Decrease</button>
                    </div>
                ))
            ) : (
                <p>Your cart is empty.</p>
            )}
            <button onClick={() => alert("Coming Soon")}>Checkout</button>
        </div>
    );
};

export default ShoppingCart;
