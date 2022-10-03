import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart'>
            <h1 style={{textAlign:'center'}}>Order Summary</h1>
            <p>Selceted Items:</p>
            <p>Total Price: $</p>
            <p>Total Shipping Charge: $</p>
            <p>Tax: $</p>
            <h4>Grand Total: $</h4>
        </div>
    );
};

export default Cart;