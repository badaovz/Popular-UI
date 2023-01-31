import React, { useState } from 'react';
import './index.css';

const Accordion = ({ id, title, info }) => {
    const [isExpand, setIsExpand] = useState(false);
    const handleExpand = () => {
        setIsExpand(!isExpand);
    };
    return (
        <div className='accordion'>
            <div className='accordion__header'>
                <h4 className='accordion__question'>{title}</h4>
                {isExpand ? (
                    <i class='fa-solid fa-minus' onClick={handleExpand}></i>
                ) : (
                    <i class='fa-solid fa-plus' onClick={handleExpand}></i>
                )}
            </div>
            <p className={`accordion__detail ${isExpand ? 'active' : ''}`}>
                {info}
            </p>
        </div>
    );
};

export default Accordion;
