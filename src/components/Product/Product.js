import React from 'react';
import { addToDb } from '../../utilities/fakedb';
import './Product.css';

const Product = (props) => {
    const{product, handleAddToCart} = props
    const {id, name, img, price,seller, ratings } = product;

    let cartHandler = (id, product)=>{
        addToDb(id);
        handleAddToCart(product);
    }
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='name'>{name}</h4>
                <p><span>Price</span> : ${price}</p>
                <p><span>Seller</span> : {seller}</p>
                <p><span>Ratings</span> : {ratings} stars</p>
            </div>
            <button onClick={ () => cartHandler(id, product)} className='btn-cart'>Add to cart </button>
        </div>
    );
};

export default Product;