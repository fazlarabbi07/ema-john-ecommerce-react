import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css';
const Shop = () => {
    const [products,setProducts]=useState([]);
    const [clickedProducts,setClickedproducts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const addToCart=(product)=>{
        
        const newClickedProducts=[...clickedProducts,product];
        setClickedproducts(newClickedProducts);

    }
   
    return (
        <div className='container'>
            <div className="product-container">
               {
                products.map(product=><Product product={product} key={product.id} addToCart={addToCart}></Product>)
               } 
            </div>
            <div className="cart-container">
               <Cart clickedProducts={clickedProducts}></Cart>
            </div>
        </div>
    );
};

export default Shop;
