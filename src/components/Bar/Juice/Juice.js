import React from 'react';
import './Juice.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Juice = (props) => {
    const {name,img,price,id} =props.juice;
    return (
        <div>
            <div className='juices'>
                <img src={img} alt=""></img>
                <div className='juice-info'>
                    <p className='juice-name'>{name}</p>
                    <p>Price:{price}</p>
                    <p>Id:{id}</p>
                    
                </div>

                <button onClick={(cart) => props.addToHandle(props.juice)} className='btn-cart'><p>Add to cart  </p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>


            </div>
        </div>
    );
};

export default Juice;