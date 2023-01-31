import React from 'react';
import './index.css';

const Slide = ({ id, name, job, image, text, nextSlide, backSlide }) => {
    console.log('data: ', id, name, job, image, text);
    return (
        <div className='slide'>
            <div className='slide__avatar'>
                <img src={image} alt={name} />
                <i class='fa-solid fa-quote-right'></i>
            </div>
            <div className='slide__content'>
                <h5 className='slide__name'>{name}</h5>
                <h5 className='slide__job'>{job}</h5>
                <p className='slide__detail'>{text}</p>
                <div className='slide__control'>
                    <i class='fa-solid fa-chevron-left' onClick={backSlide}></i>
                    <i
                        class='fa-solid fa-chevron-right'
                        onClick={nextSlide}
                    ></i>
                </div>
                <button className='btn slide__btn'>Surprise Me</button>
            </div>
        </div>
    );
};

export default Slide;
