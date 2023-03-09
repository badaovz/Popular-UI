import React from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import './index.css';
import { useCartContext } from '../../contexts/context';

const CartItem = ({ id, title, price, img, amount }) => {
    const { increaseCartItem, decreaseCartItem, removeCartItem } =
        useCartContext();
    return (
        <div className='cartItem'>
            <img src={img} alt={title} className='image' />
            <div className='cartItem__detail'>
                <p className='cartItem__title'>{title}</p>
                <p className='cartItem__price'>${price.toFixed(2)}</p>
                <button
                    className='btn btn__remove'
                    onClick={() => removeCartItem(id)}
                >
                    remove
                </button>
            </div>
            <div className='cartItem__control'>
                <FaAngleUp onClick={() => increaseCartItem(id)} />
                <p className='cartItem__amount'>{amount}</p>
                <FaAngleDown onClick={() => decreaseCartItem(id)} />
            </div>
        </div>
    );
};

export default CartItem;
