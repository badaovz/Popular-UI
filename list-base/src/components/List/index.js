import React from 'react';
import './index.css';

const List = ({ name, age, image }) => {
    return (
        <div className='list'>
            <img className='list__image' src={image} alt={name} />
            <div className='list__detail'>
                <h3 className='list__name'>{name}</h3>
                <p className='list__age'>{age} year</p>
            </div>
        </div>
    );
};

export default List;
