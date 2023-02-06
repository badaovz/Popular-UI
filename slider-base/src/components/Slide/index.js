import React from 'react';
import './index.css';

const Slide = ({
    id,
    name,
    title,
    image,
    quote,
    peopleIndex,
    index,
    length,
}) => {
    let position = 'nextSlide';
    if (peopleIndex === index) {
        position = 'activeSlide';
    }

    if (peopleIndex === index - 1 || (index === 0 && peopleIndex === length)) {
        position = 'lastSlide';
    }

    return (
        <div className={`slide ${position}`}>
            <div className='slide__avatar'>
                <img src={image} alt={name} />
            </div>
            <h5 className='slide__name'>{name}</h5>
            <h5 className='slide__job'>{title}</h5>
            <p className='slide__detail'>{quote}</p>
            <i class='fa-solid fa-quote-right'></i>
        </div>
    );
};

export default Slide;
