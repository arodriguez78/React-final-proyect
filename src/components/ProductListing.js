// src/components/ProductListing.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import ProductCard from './ProductCard';

const products = [
    { id: 1, name: 'Fern', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Succulent', price: 15, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Cactus', price: 20, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Bamboo', price: 25, image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Orchid', price: 30, image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Pothos', price: 35, image: 'https://via.placeholder.com/150' },
];

const ProductListing = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className="product-listing">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
            ))}
        </div>
    );
};

export default ProductListing;
