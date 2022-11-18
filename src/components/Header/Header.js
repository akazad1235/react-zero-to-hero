import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <header>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='nav'>
                    <Link to={'/'}>Shop</Link>
                    <Link to={'/order'}>Order</Link>
                    <Link to={'/products'}>Product</Link>
                </div>
            </header>
        </div>
    );
};

export default Header;