import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
const Header = () => {
    return (
        <div>
            <header>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='nav'>
                      <a href="">Order</a>
                      <a href="">Product</a>
                      <a href="">Sales</a>  
                </div>
            </header>
        </div>
    );
};

export default Header;