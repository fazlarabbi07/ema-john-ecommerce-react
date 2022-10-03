import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {count}=props;
const totalPrice=(previousPrice,newPrice)=>previousPrice+newPrice.price;
    console.log(count);
    return (
        <div className='cart'>
            <h1 style={{textAlign:'center'}}>Order Summary</h1>
            <p>Selceted Items:{count.length}</p>
            <p>Total Price:{count.reduce(totalPrice,0)} $</p>
            <p>Total Shipping Charge: $</p>
            <p>Tax: $</p>
            <h4>Grand Total: $</h4>
        </div>
    );
};

export default Cart;