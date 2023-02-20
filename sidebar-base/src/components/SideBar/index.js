import React from 'react';
import './index.css';
import { FaTimes } from 'react-icons/fa';
import { links, social } from '../../asset/data';

const SideBar = ({ clicked, closeSidebar }) => {
    return (
        <div className={`sidebar ${clicked ? 'active' : ''}`}>
            <div className='sidebar__header'>
                <h4 className='sidebar__title'>
                    D.<span>Nguyen</span>
                </h4>
                <button className='exitBtn' onClick={closeSidebar}>
                    <FaTimes />
                </button>
            </div>
            <div className='sidebar__body'>
                <ul className='sidebar__links'>
                    {links.map((l) => (
                        <li className='sidebar__link' key={l.id}>
                            <a href={l.url}>
                                {l.icon} {l.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='sidebar___footer'>
                <ul className='sidebar__socials'>
                    {social.map((s) => (
                        <li className='sidebar__social' key={s.id}>
                            <a href={s.url}>{s.icon}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
