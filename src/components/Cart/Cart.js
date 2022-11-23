import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const{cart} = props
    let price = 0;
    let shipping = 0;
    let quantity = 0;

    for(const product of cart){
        quantity = quantity+product.quantity;
        price = price+product.price*quantity;
        shipping = shipping+product.shipping;
        
    }
    let tax = price * 10/100;
    let grandTotal = price+shipping+tax;

    return (
        <div className='cart-container'>
            <h5>Order Cart Summary</h5>
            <p>Selected Items:{quantity}</p>
            <p>Total Price: ${price} </p>
            <p>Total Shipping: ${shipping} </p>
            <p>Tax: ${tax}</p>
            <p>Grand Total: {grandTotal}</p>
            <button>Reset form develop</button>
        </div>
    );
};

export default Cart;