import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const{product, handleRemoveProduct} = props
    const{id, name, price, shipping, img, quantity} = props.product
    return (
        <div className='item-product-container'>
            <div className="item-img">
                <img src={img} alt="" />
            </div>
            <div className="item-details-container">
                <div className="details">
                    <p>{name}</p>
                    <p>price: {price}</p>
                    <p>shipping-charge: {shipping}</p>
                    <p>Quantity: {quantity} </p>
                </div>
                <div className="delete-container">
                    <button onClick={()=>handleRemoveProduct(product)}>Delete</button>
                </div>
            </div>
            
        </div>
    );
};

export default ReviewItem;