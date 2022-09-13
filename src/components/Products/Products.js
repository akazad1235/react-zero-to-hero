import React from 'react';
import {add,  mul } from '../../utilities/Calculate';

const Products = () => {
    let summation = add(4, 5);
    let proMul = mul(35, 5);
    return (
        <div>
            <p>{summation}</p>
            <p>{proMul}</p>
        </div>
    );
};

export default Products;