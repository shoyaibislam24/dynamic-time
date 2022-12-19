import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Calculate from '../Calculate/Calculate';
import Cart from '../Cart/Cart';
import QuesAns from '../QuesAns/QuesAns';
import './Body.css';
const Body = () => {
    const [items, setItems] = useState([]);
    const [calculate, setCalculate] = useState([]);

    useEffect( ()=>{
        fetch('activities.json')
        .then(res => res.json())
        .then(data => setItems(data))
    }, []);

    // add card handle 
    const handleAddToCart = (item) =>{
        // console.log(item.time);
        const newCalculate = [...calculate, item];
        setCalculate(newCalculate);
    }

    return (
        <div>
            <div className='body-container'>
            <div className='cart-container'>
                {
                    items.map(item => <Cart key={item.id}
                    item = {item}
                    handleAddToCart = {handleAddToCart}
                    ></Cart>)
                }
            </div>
            <div className='calculate-container'>
                <div>
                    <Calculate calculate = {calculate} ></Calculate>
                    
                </div>
            </div>
        </div>
            <div>
                <QuesAns></QuesAns>
            </div>
        </div>
    );
};

export default Body;