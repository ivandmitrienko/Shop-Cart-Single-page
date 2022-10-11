const defaultState = {
    price: 1,
}

export function count(state = defaultState, action) {
    switch (action.type) {
        case 'ADD_PRICE':
            return { ...state, price: state.price + 1 };
        case 'REDUCE_PRICE':
            return { ...state, price: state.price - 1 };
        default:
            return state;
    }
}
