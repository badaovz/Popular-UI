import React, { useRef } from 'react';
import subLinks from '../../asset/data';
import './index.css';
import { FaBars } from 'react-icons/fa';
import { useSubmenuContext } from '../../contexts/context';

const Navbar = () => {
    const pageRef = useRef();
    const { openSubmenu, closeSubmenu, openSidebar } = useSubmenuContext();
    const handlePageHover = (e) => {
        const page = e.target.textContent;
        const navItem = e.target.getBoundingClientRect();
        const x = (navItem.left + navItem.right) / 2;
        const y = navItem.bottom - 3;
        openSubmenu(page, { x, y });
    };
    const handleSubmenu = (e) => {
        if (!e.target.classList.contains('navbar__item')) {
            closeSubmenu();
        }
    };
    return (
        <nav className='nav' onMouseOver={handleSubmenu}>
            <div className='navbar'>
                <div className='navbar__header'>
                    <h3 className='navbar__logo'>
                        D.<span>Nguyen</span>
                    </h3>
                    <button className='navbar__bar' onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>
                <ul className='navbar__items'>
                    {subLinks.map((s, index) => (
                        <li
                            className='navbar__item'
                            key={index}
                            ref={pageRef}
                            onMouseOver={handlePageHover}
                        >
                            {s.page}
                        </li>
                    ))}
                </ul>
                <button className='navbar__sign btn'>Sign in</button>
            </div>
        </nav>
    );
};

export default Navbar;
