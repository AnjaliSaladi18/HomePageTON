import React from 'react'
import './Header.css';
function Header() {
    return (
        <div className='header__container'>
            <div className="logo__container">
                <img src="/images/logo.png" alt="TONLOGO" className='header__logo' />
            </div>
            <div className="menu__container">
                <a href="#">Training Room</a>
                <a href="#">Platforms</a>
                <a href="#">Subscriptions</a>
                <a href="#">Tools & Data</a>
                <a href="#">Franchise</a>
                <a href="#">Contact</a>
            </div>
        </div>
    )
}

export default Header