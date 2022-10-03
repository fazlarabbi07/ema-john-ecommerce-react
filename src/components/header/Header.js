import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'


const Header = () => {
    return (
        
           <nav className='header'>
                <div className='logoContainer'>
                    <img className='logo' src={logo} alt="" />
                </div>
                <div className='ulList'>
                            
                            <a href="/order">Order</a>
                            <a href="/orderReview">Order Review</a>
                            <a href="manageInventory">Manage Inventory</a>
                            <a href="login">Login</a>
                          
                </div>
           </nav>
      
    );
};

export default Header;