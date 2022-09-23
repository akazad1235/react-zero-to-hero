import React from 'react';
import './Shop.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    })

    const handleAddToCart = (product)=>{
        let newCart = [...cart, product];
        setCart(newCart);  
    }
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map( (product) => {
                        return <div>
                            <Product product = {product} handleAddToCart={handleAddToCart} key={product.id}></Product>
                        </div>
                    })
                }
            </div>
            <div className="cart-container">
                <p>this is Cart {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;