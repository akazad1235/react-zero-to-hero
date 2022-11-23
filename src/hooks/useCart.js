import { useState } from "react";
import { useEffect } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
    const[cart, setCart] = useState([]);

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
    
    return [cart, setCart]
};

export default useCart;