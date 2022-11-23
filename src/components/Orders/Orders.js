import React from 'react';
import './Orders.css'
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const[products, setProducts] = useProducts();
    const[cart, setCart] = useCart(products)

    const handleRemoveProduct = (product)=>{
        const resetCart = cart.filter(cart => cart.id !==product.id);
        setCart(resetCart)
        removeFromDb(product.id)
    }
    return (
        <div className='reviewItem-container'>
           <div className='reviewItem-product-container'>
                {
                    cart.map(product => 
                        <ReviewItem 
                            key={product.id}
                            product={product} 
                            handleRemoveProduct={handleRemoveProduct} >   
                        </ReviewItem>
                    )
                }
           </div>
           <div className='cart-container'>
                <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Orders;