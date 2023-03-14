import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './index.css';
import { useAppContext } from '../../contexts/context';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { amount } = useAppContext;
    return (
        <nav className='navbar'>
            <div className='navbar__container'>
                <h4 className='navbar__logo'>
                    <Link to='/'>
                        <span>Cocktail</span> D.Nguyen
                    </Link>
                </h4>
                <div className='navbar__links'>
                    <p className='navbar__link'>
                        <Link to='/'>Home</Link>
                    </p>
                    <p className='navbar__link'>
                        <Link to='/about'>About</Link>
                    </p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
