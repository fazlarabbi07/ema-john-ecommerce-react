import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const {product,addToCart,deleteFromCart}=props;
    // const{product}=props;
    const{name,seller,price,ratings,img}=product;

    return (
        <div className='product'>
            <img src={img} alt=""/>
            <div className='product-info'>
            <h3>{name}</h3>
            <h4>Price:${price}</h4>
            <p>Manufacturer:{seller}</p>
            <p>Rating:{ratings}</p>
            </div>
            <button onClick={()=>{addToCart(product)}} className='addToCart'>ADD TO CART</button>
            <button onClick={()=>{deleteFromCart(product)}} className='deleteFromCart'>Delete From CART</button>
        </div>
    );
};

export default Product;