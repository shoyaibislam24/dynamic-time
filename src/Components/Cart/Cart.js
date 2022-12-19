import React from 'react';
import './Cart.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Cart = (props) => {
    const {handleAddToCart} = props;
    const {name, picture, time} = props.item;
    return (
        // <div className='item'>
        //     <img src={picture} alt="" />
        //     <h4>{name}</h4>
        //     <h6>Time: {time}</h6>
        //     {/* btn  */}
        //     <div className="d-grid gap-2 card-btn">
        //         <Button variant="secondary" size="lg">
        //         Block level button
        //         </Button>
        //     </div>
        // </div>
        <div className='cart'>
            <Card>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
              Time Required : {time} min
              </Card.Text>
            </Card.Body>
            <button onClick={()=>handleAddToCart(props.item)} className='d-grid gap-2 card-btn card-btn'>Add To List</button>
            </Card> 
        </div>
          
    );
};

export default Cart;