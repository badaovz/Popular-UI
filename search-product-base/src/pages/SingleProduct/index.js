import React from 'react';
import './index.css';
import { Link, useParams } from 'react-router-dom';
import DefaultLayout from '../DefaultLayout';
import { useAppContext } from '../../contexts/context';

const SingleProduct = () => {
    const { id } = useParams();
    console.log('Param: ', id);
    const { products } = useAppContext();
    const { name, image, info, glass, category, instructions, ingredients } =
        products.find((p) => p.id === id);

    return (
        <DefaultLayout>
            <div className='singleProduct'>
                <Link to='/' className=' singleProduct__backBtn'>
                    BACK HOME
                </Link>
                <h4 className='title'>{name}</h4>
                <div className='singleProduct__content'>
                    <img
                        src={image}
                        alt={name}
                        className='singleProduct__image'
                    />
                    <div className='singleProduct__info'>
                        <p className='singleProduct__name'>
                            <span>Name: </span>
                            {name}
                        </p>
                        <p className='singleProduct__name'>
                            <span>Category: </span>
                            {category}
                        </p>
                        <p className='singleProduct__name'>
                            <span>Info: </span>
                            {info}
                        </p>
                        <p className='singleProduct__name'>
                            <span>Glass: </span>
                            {glass}
                        </p>
                        <p className='singleProduct__name'>
                            <span>Instructions: </span>
                            {instructions}
                        </p>
                        <p className='singleProduct__name'>
                            <span>Ingredients: </span>
                            {ingredients}
                        </p>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default SingleProduct;
