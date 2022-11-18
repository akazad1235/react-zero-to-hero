import React from 'react';
import './Shop.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { getStoredCart } from '../../utilities/fakedb';
import useProducts from '../../hooks/useProducts';
const Shop = () => {
    const [products, setProducts] = useProducts([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    }, []);
    useEffect( () => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for(let id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
                console.log(quantity);
            }
        }
        setCart(savedCart);
    }, [products])

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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;