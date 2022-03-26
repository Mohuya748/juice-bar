import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    
    


    return (
        <div className='cart'>
            <h4>Selected Juices</h4>
            {cart.map((cart)=><p>{cart.name}</p>) }

        </div>
    )
};   
    


export default Cart;