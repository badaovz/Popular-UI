import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './index.css';
import { useCartContext } from '../../contexts/context';

const Navbar = () => {
    const { amount } = useCartContext();
    return (
        <nav className='navbar'>
            <div className='navbar__container'>
                <h4 className='navbar__logo'>useReducer</h4>
                <div className='navbar__cart'>
                    <FaShoppingCart />
                    <p className='navbar__amount'>{amount}</p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
