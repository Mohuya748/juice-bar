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
    const [random, setRandom] = useState([])
    const addToHandle = (juice) => {
       if(cart.length<4){
        const newCart = [...cart, juice];
        setCart(newCart);
       }
       else{
           alert('you can not select more than 4 juices')
       }
    }
    let random2 = {}
    const choseOne = () =>{
       let random = cart[Math.floor((Math.random()*cart.length))]
        random2 = Object.assign({}, random);
        setRandom(random2)
    }
    const clearBtn = () =>{
        setCart([])

    }

    return (
        <div>
            <div className='header'>
                <h1 className='title'>Juice Bar</h1>
                <h3 className='small-title'>Order Your Favourite Juice in This Hot Summer!!</h3>
            </div>
            <div className='shop-container'>
                <div className='juice-container'>

                    {
                        juices.map(juice => <Juice key={juice.id} juice={juice} addToHandle={addToHandle} ></Juice>)
                    }

                </div>
                <div className='selected-items'>

                    <Cart cart={cart} key={cart.id} ></Cart> 
                    <h1 className='chosen-one'>{random.name}</h1>
                    
                    <button onClick={choseOne} className='cart-btn'>Choose One</button>
                    <button onClick={clearBtn} className='cart-choose-btn'>choose Again</button>


                </div>


            </div>
        </div>
    );
};

export default Bar;