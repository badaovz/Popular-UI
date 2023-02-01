import React from 'react';
import './index.css';

const Card = ({ id, title, category, img, price, desc }) => {
    return (
        <div className='card'>
            <div className='card__image'>
                <img src={img} alt={title} />
            </div>
            <div className='card__body'>
                <div className='card__header'>
                    <h4 className='card__title'>{title}</h4>
                    <p className='card__price'>${price}</p>
                </div>
                <p className='card__info'>{desc}</p>
            </div>
        </div>
    );
};

export default Card;
