import React from 'react';
import './index.css';

const Photo = ({ id, urls, alt_description, likes, user }) => {
    const { regular } = urls;
    const {
        name,
        portfolio_url,
        profile_image: { medium },
    } = user;

    return (
        <div className='photo'>
            <img src={regular} alt={name} className='photo__img' />
            <div className='photo__footer'>
                <div className='photo__info'>
                    <h4 className='photo__name'>{name}</h4>
                    <p className='photo__like'>{likes} likes</p>
                </div>
                <a href={portfolio_url} className='photo__avatar'>
                    <img src={medium} alt='avatar_img' />
                </a>
            </div>
        </div>
    );
};

export default Photo;
