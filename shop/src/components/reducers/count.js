const defaultState = {
    count: 1,
}

export function count(state = defaultState, action) {
    switch (action.type) {
        case 'ADD_COUNT':
            return { ...state, count: state.count++ };
        case 'REDUCE_COUNT':
            if (state.count !== 1) {
                return { ...state, count: state.count-- }
            };
        default:
            return state;

    }
}
