import {
    CLEAR_CART,
    DECREASE,
    GET_TOTAL,
    INCREASE,
    REMOVE,
    LOADING,
    SHOW_ITEMS,
} from './actions';

const cartReducer = (state, action) => {
    if (action.type === CLEAR_CART) {
        return { ...state, cart: [] };
    }

    if (action.type === REMOVE) {
        const newCart = state.cart.filter((item) => item.id !== action.payload);
        return { ...state, cart: newCart };
    }

    if (action.type === INCREASE) {
        const newCart = state.cart.map((item) => {
            if (item.id === action.payload) {
                return { ...item, amount: item.amount + 1 };
            } else {
                return item;
            }
        });
        return { ...state, cart: newCart };
    }

    if (action.type === DECREASE) {
        const newCart = state.cart
            .map((item) => {
                if (item.id === action.payload) {
                    return { ...item, amount: item.amount - 1 };
                } else {
                    return item;
                }
            })
            .filter((item) => item.amount !== 0);
        return { ...state, cart: newCart };
    }

    if (action.type === GET_TOTAL) {
        let { total, amount } = state.cart.reduce(
            (cartTotal, item) => {
                cartTotal.total += item.amount * item.price;
                cartTotal.amount += item.amount;
                return cartTotal;
            },
            {
                total: 0,
                amount: 0,
            },
        );

        return { ...state, total, amount };
    }

    if (action.type === LOADING) {
        return { ...state, loading: true };
    }

    if (action.type === SHOW_ITEMS) {
        return { ...state, loading: false };
    }

    throw new Error(`Unknown action type: ${action.type}`);
};

export default cartReducer;
