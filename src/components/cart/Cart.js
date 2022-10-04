import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {clickedProducts}=props;
    const{price}=clickedProducts;
    const productPrice=(one,two)=>one+two.price;
    const total=clickedProducts.reduce(productPrice,0);
    return (
        <div className='cart'>
            <h1 style={{textAlign:'center'}}>Order Summary</h1>
            <p>Selceted Items:{clickedProducts.length}</p>
            <p>Total Price: ${total} </p>
            <p>Total Shipping Charge: {total*.10}$</p>
            <p>Tax: {total*.001}$</p>
            <h4>Grand Total: {total+(total*.10)+(total*.001)}$</h4>
        </div>
    );
};

export default Cart;