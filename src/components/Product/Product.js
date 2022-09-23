import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Product.css';

const Product = (props) => {
    const{product, handleAddToCart} = props
    const {name, img, price,seller, ratings } =product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='name'>{name}</h4>
                <p><span>Price</span> : ${price}</p>
                <p><span>Seller</span> : {seller}</p>
                <p><span>Ratings</span> : {ratings} stars</p>
            </div>
            <button onClick={ () => handleAddToCart(product)} className='btn-cart'>
                Add to Cart
                <FontAwesomeIcon icon="fa-solid fa-check-square"/>
            </button>
        </div>
    );
};

export default Product;