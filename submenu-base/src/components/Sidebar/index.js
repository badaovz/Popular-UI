import React from 'react';
import './index.css';
import { FaTimes } from 'react-icons/fa';
import subLinks from '../../asset/data';
import { useSubmenuContext } from '../../contexts/context';

const SideBar = () => {
    const { isSidebarOpen, closeSidebar } = useSubmenuContext();
    return (
        <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
            <div className='sidebar__content'>
                {subLinks.map((item, index) => {
                    return (
                        <div className='sidebar__item' key={index}>
                            <h4 className='sidebar__page'>{item.page}</h4>
                            <ul className='item'>
                                {item.links.map((link, index) => (
                                    <li className='item__link' key={index}>
                                        <a href={link.url}>
                                            {link.icon} {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
                <button className='exitBtn' onClick={closeSidebar}>
                    <FaTimes />
                </button>
            </div>
        </div>
    );
};

export default SideBar;
