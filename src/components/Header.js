// src/components/Header.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const totalItems = useSelector((state) => state.cart.totalItems);

    return (
        <header>
            <h1>Plant Shop</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart">
                    Cart {totalItems > 0 && <span>({totalItems})</span>}
                </Link>
            </nav>
        </header>
    );
};

export default Header;
