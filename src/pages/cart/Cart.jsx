import React, { useContext } from 'react';
//import {cartInfo} from "../../data/cart";
import "./cart.css";
import OrderSummary from './OrderSummary';
import CartItem from './CartItem';
import CartContext from '../../context/CartContext';

const Cart = () => {
    const {cartItems , addToCart,removeFromCart} =useContext(CartContext)


    const totalPrice=cartItems.reduce((acc,cur) => acc + cur.price * cur.quantity, 0).toFixed(2);
    /*the above line code is for calculating the total price of all books from the cart
     and the 0 value is the first value before calculating */
    return (
        <div className='cart'>
            <div className="cart-title">Your Shopping Cart</div>
            <div className="cart-wrapper">
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <CartItem key={item.id} 
                        removeFromCart={removeFromCart} 
                        addToCart={addToCart} item={item}/>
                    ))}
                </div>
                <OrderSummary totalPrice={totalPrice}/>
            </div>
            
        </div>
    );
}

export default Cart;
