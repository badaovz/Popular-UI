import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, name, image, info, glass }) => {
    return (
        <div className='productItem'>
            <img className='productItem__image' src={image} alt={name} />
            <div className='productItem__content'>
                <h3 className='productItem__name'>{name}</h3>
                <p className='productItem__info'>{info}</p>
                <p className='productItem__glass'>{glass}</p>
                <Link to={`/product/${id}`} className='productItem__detail'>
                    DETAILS
                </Link>
            </div>
        </div>
    );
};

export default ProductItem;
