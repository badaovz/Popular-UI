import React, { useEffect, useRef, useState } from 'react';
import { useSubmenuContext } from '../../contexts/context';
import './index.css';

const Submenu = () => {
    const {
        isSubmenuOpen,
        page: { page, links },
        location,
    } = useSubmenuContext();
    const submenuRef = useRef();
    const [columns, setColumns] = useState('col-2');

    useEffect(() => {
        setColumns('col-2');
        const submenu = submenuRef.current;
        const { x, y } = location;
        submenu.style.left = `${x}px`;
        submenu.style.top = `${y}px`;

        if (links.length === 3) setColumns('col-3');
        if (links.length > 3) setColumns('col-4');
    }, [page, links, location]);

    return (
        <div
            className={`submenu ${isSubmenuOpen ? 'show' : ''}`}
            ref={submenuRef}
        >
            <h4 className='submenu__title'>{page}</h4>
            <div className={`submenu__links ${columns}`}>
                {links.map((link, index) => (
                    <li className='submenu__link' key={index}>
                        <a href={link.url}>
                            {link.icon}
                            {link.label}
                        </a>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default Submenu;
