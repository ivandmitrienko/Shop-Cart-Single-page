import * as consts from '../actions/actions';

const defaultState = {
    count: 1,
}

export function count (state = defaultState, action) {
    switch (action.type) {
        case consts.ADD_PRICE:
            return { ...state, count: state.count + 1 };
        case consts.REDUCE_PRICE:
            return { ...state, count: state.count - 1 };
        case consts.RESTART_COUNT:
            return { ...state, count: defaultState.count };
        default:
            return state;
    }
}
