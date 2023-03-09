import React from 'react';
import './index.css';
import { useCartContext } from '../../contexts/context';
import CartItem from '../CartItem';

const CartContent = () => {
    const { cart, total, clearCart } = useCartContext();
    return (
        <div className='cart'>
            <h3 className='cart__title'>Your Bag</h3>
            {cart.map((item) => (
                <CartItem {...item} key={item.id} />
            ))}
            {cart.length > 0 ? (
                <>
                    <hr />
                    <div className='total'>
                        <p className='total__name'>Total</p>
                        <p className='total__price'>${total.toFixed(2)}</p>
                    </div>
                    <button
                        className='btn btn__clear'
                        onClick={() => clearCart()}
                    >
                        Clear Cart
                    </button>
                </>
            ) : (
                <>
                    <p className='cart__notify'>Cart Is Empty</p>
                    <button
                        className='btn btn__clear'
                        onClick={() => clearCart()}
                    >
                        Add To Cart
                    </button>
                </>
            )}
        </div>
    );
};

export default CartContent;
