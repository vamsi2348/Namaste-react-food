import React from 'react';
import { LOGO_URL } from '../utils/constans';

const Header = () => {
    return (
        <div className='header'>
        {/* // logo */}
            <div className='res-logo-container'>
                <img className="logo" alt='logo' src={LOGO_URL} />
            </div>
        {/* //nav-item */}
        <div className='nav-list'>
            <ul>
                <li>Home</li>
                <li>About US</li>
                <li>Contact US</li>
                <li>Cart</li>
            </ul>

            </div>
        </div>
        )
}

export default Header;