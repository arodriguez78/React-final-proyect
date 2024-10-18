// src/components/ProductCard.js
import React, { useState } from 'react';

const ProductCard = ({ product, onAddToCart }) => {
    const [isAdded, setIsAdded] = useState(false); // Track if item is added to cart

    const handleAddToCart = () => {
        onAddToCart(product);
        setIsAdded(true); // Disable the button once added
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={handleAddToCart} disabled={isAdded}>
                {isAdded ? 'Added' : 'Add to Cart'}
            </button>
        </div>
    );
};

export default ProductCard;
