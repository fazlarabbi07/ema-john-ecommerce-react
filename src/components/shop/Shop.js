import React, { useEffect, useState } from 'react';
import { addToFakeDb } from '../../utilities/addToFakeDb';
import { deleteFromFakeDb } from '../../utilities/deleteFromFakeDb';
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
        addToFakeDb(product.name)
        // console.log(product.id); 

    }
    const deleteFromCart=(product)=>{
        deleteFromFakeDb(product.name);
        // console.log('Hello Noman',product);
    }
   
    return (
        <div className='container'>
            <div className="product-container">
               {
                products.map(product=><Product product={product} key={product.id} addToCart={addToCart} deleteFromCart={deleteFromCart}></Product>)
               } 
            </div>
            <div className="cart-container">
               <Cart clickedProducts={clickedProducts}></Cart>
            </div>
        </div>
    );
};

export default Shop;
