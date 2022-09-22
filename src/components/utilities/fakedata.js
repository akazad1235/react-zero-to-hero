const addToDb = id => {
    let shoppingCart;
    //get cart
    let storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        console.log('dd');
        shoppingCart =  JSON.parse(storedCart);
    }else{
        shoppingCart = {};
    }
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        localStorage.setItem(id, newQuantity);
        shoppingCart[id] = newQuantity;
    }else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    
}
export {addToDb}