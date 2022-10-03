import React from 'react';
import './Product.css'

const Product = (props) => {
    const{name,seller,price,ratings,img}=props.product;
    // console.log(props.product);
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h3>{name}</h3>
            <h4>Price:${price}</h4>
            <p>Manufacturer:{seller}</p>
            <p>Rating:{ratings}</p>
            </div>
            <button className='addToCart'>ADD TO CART</button>
        </div>
    );
};

export default Product;