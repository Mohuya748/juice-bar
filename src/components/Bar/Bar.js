import React, { useEffect, useState } from 'react';
import './Bar.css'

const Bar = () => {
    const[juice, setJuice]= useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data =>setJuice(data))

    },[])
    console.log(juice)
    return (
        
        <div>
            <div className='header'>
                <h1>Juice Bar</h1>
                <h3>Order Your Favourite Juice in This Hot Summer!!</h3>
            </div>

        </div>
    );
};

export default Bar;