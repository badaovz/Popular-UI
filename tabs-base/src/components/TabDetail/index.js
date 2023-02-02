import React from 'react';
import './index.css';

const TabDetail = ({ id, title, order, dates, duties = [], company }) => {
    return (
        <div className='tab'>
            <h3 className='tab__title'>{title}</h3>
            <h4 className='tab__company'>{company}</h4>
            <p className='tab__date'>{dates}</p>
            {duties.map((d, index) => (
                <div className='tab__duty' key={index}>
                    <i className='fa-solid fa-angles-right'></i>
                    <p className='tab__detail'>{d}</p>
                </div>
            ))}
            <button className='btn'>MORE INFO</button>
        </div>
    );
};

export default TabDetail;
