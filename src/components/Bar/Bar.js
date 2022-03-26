import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Bar.css'
import Juice from './Juice/Juice';

const Bar = () => {
    const [juices, setJuices] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setJuices(data))

    }, [])

    const addToHandle = (juice) => {
        const newCart = [...cart, juice];
        setCart(newCart);
    }
    

    // cart.map(cart=>setCart(cart.name);
    return (
        <div>
            <div className='header'>
                <h1>Juice Bar</h1>
                <h3>Order Your Favourite Juice in This Hot Summer!!</h3>
            </div>
            <div className='shop-container'>
                <div className='juice-container'>

                    {
                        juices.map(juice => <Juice key={juice.id} juice={juice} addToHandle={addToHandle} ></Juice>)
                    }

                </div>
                <div className='selected-items'>
               
            <Cart cart={cart} key={cart.id}></Cart>

                </div>
            </div>
        </div>
    );
};

export default Bar;