import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1 className='header'>Welcome to my React Website</h1>

            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/service">Service</a>
                <a href="/about">About us</a>
            </nav>
            
        </div>
    );
};

export default Header;