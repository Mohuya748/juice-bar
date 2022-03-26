import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
console.log({cart});



    return (
        <div className='cart'>
            <h4>Selected Juices</h4>
            {cart.map((cart) =><p>{cart.name}</p>)}
            <div className='cart-btn-display'>
            <button  className='cart-btn' >Choose One</button>
            <button className='cart-btn'>choose Again</button>
            </div>
           

        </div>
    )
};



export default Cart;