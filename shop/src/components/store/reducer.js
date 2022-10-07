const defaultState = {
    products: [],
}

export function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return { ...state, products: [...state.products, action.product] };
        default:
            return state;

    }
}
