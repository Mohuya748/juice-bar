import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    

    let juiceName = '';
    for(const juice of cart){
        juiceName = juice.name;
    }
    

    return (
        <div className='cart'>
            <h4>Selected Juices</h4>
            <p>{juiceName}</p>
              
        </div>
    );
};

export default Cart;