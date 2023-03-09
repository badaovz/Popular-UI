import { createContext, useContext, useEffect, useReducer } from 'react';
import {
    CLEAR_CART,
    DECREASE,
    GET_TOTAL,
    INCREASE,
    REMOVE,
    LOADING,
    SHOW_ITEMS,
} from '../actions';
import cartItems from '../asset/data';
import cartReducer from '../reducer';

const CartContext = createContext();

const initialState = {
    loading: false,
    amount: 0,
    total: 0,
    cart: cartItems,
};

export default function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const fetData = () => {
        dispatch({ type: LOADING });
    };

    const clearCart = () => {
        dispatch({ type: CLEAR_CART });
    };

    const removeCartItem = (id) => {
        dispatch({ type: REMOVE, payload: id });
    };

    const increaseCartItem = (id) => {
        dispatch({ type: INCREASE, payload: id });
    };
    const decreaseCartItem = (id) => {
        dispatch({ type: DECREASE, payload: id });
    };

    const getTotal = () => {
        dispatch({ type: GET_TOTAL });
    };

    useEffect(() => {
        dispatch({ type: LOADING });
        let timeOut = setTimeout(() => {
            dispatch({ type: SHOW_ITEMS });
        }, 2000);

        return () => clearTimeout(timeOut);
    }, []);

    useEffect(() => {
        getTotal();
    }, [state.cart]);

    return (
        <CartContext.Provider
            value={{
                ...state,
                clearCart,
                removeCartItem,
                increaseCartItem,
                decreaseCartItem,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCartContext = () => {
    return useContext(CartContext);
};
