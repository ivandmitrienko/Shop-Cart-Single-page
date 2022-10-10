const defaultState = {
    products: [],
    count:1,
}

export function products(state = defaultState, action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return { ...state, products: [...state.products, action.product] };
        default:
            return state;

    }
}
