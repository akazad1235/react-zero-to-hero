import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { addToDb } from '../utilities/fakedata';

const Products = () => {
    const [products, setProducts] =  useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setProducts(data));
    })
    let cartHandler = (id)=>{
        addToDb(id);
    }
    return (
        <div>
            {
                products.map(product => {
                    return (
                        <div>
                            <p>Name: { product.name}</p>
                            <p key={product.id}></p>
                            <p>Price: {product.price}</p>
                            <button onClick={()=>cartHandler(product.id)}>Add to cart</button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Products;