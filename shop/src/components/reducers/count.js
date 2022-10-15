const defaultState = {
    count: 1,
}

export function count(state = defaultState, action) {
    switch (action.type) {
        case 'ADD_PRICE':
            return { ...state, count: state.count + 1 };
        case 'REDUCE_PRICE':
            return { ...state, count: state.count - 1 };
        case 'RESTART_COUNT':
            return { ...state, count: defaultState.count };

        default:
            return state;
    }
}
