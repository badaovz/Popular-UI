import React, { useState } from 'react';
import './index.css';

const Card = ({ id, name, info, image, price, removeTourById }) => {
    const [readMore, setReadMore] = useState(true);

    return (
        <div className='card'>
            <div className='card__header'>
                <img src={image} alt={name} />
                <p className='card__price'>${price}</p>
            </div>
            <div className='card__body'>
                <h4 className='card__title'>{name}</h4>
                <p
                    className={`card__info ${
                        readMore ? 'card__info--less' : ''
                    }`}
                >
                    {info}
                </p>

                <span
                    className='card__moreInfo'
                    onClick={() => setReadMore(!readMore)}
                >
                    {readMore ? 'Read More' : 'Show Less'}
                </span>

                <button
                    className='btn medium center'
                    onClick={() => removeTourById(id)}
                >
                    Not Interested
                </button>
            </div>
        </div>
    );
};

export default Card;
