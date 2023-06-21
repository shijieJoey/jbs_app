import { TEST_ACTION } from "../Actions";

const initialState = {
    zhaoYiSheng: {}
}

export const characterReducer = (state = initialState, action) => {
    switch(action.type) {
        case TEST_ACTION:
            return handleTestAction(state, action.payload);
        default:
            return state;
    }
}

const handleTestAction = (state, payload) => {
    return {
        ...state
    }
}
