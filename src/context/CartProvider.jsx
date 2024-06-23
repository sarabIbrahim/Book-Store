import React, { useState } from 'react';
import CartContext from './CartContext';

const CartProvider = ({children}) => {
    const [cartItems,setCartItems]=useState([]);

    //add to cart
    const addToCart = (item) => {
        const isExist =cartItems.find(cart => cart.id === item.id);//checking if the id is exsests inside the cart
        //this if else statement is to avoid adding copies of items when clicking on plus button from the cart
        if(isExist){
            setCartItems(
                cartItems.map((cartItem) => cartItem.id === item.id ? item :cartItem)
            )
        } else{
             setCartItems(prev => [...prev,item]);
    }
        }
       

    //remove to cart
    const removeFromCart = (id) => {
       const cart= cartItems.filter(c => c.id !== id);
       setCartItems(cart);
    }


    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            cartItemsLength: cartItems.length,
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
