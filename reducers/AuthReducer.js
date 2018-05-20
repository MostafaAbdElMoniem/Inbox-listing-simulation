import { LOGIN_ATTEMPT, LOGIN_SUCCESS, LOGIN_FAILED } from './../actions/types' 

const INITIAL_STATE = { user: null, error: '' }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_ATTEMPT:
            return { ...INITIAL_STATE }
        case LOGIN_SUCCESS:
            return { ...INITIAL_STATE, user: action.payload }
            case LOGIN_FAILED:
            return { ...INITIAL_STATE, error: "Auth Failed" }
        default:
            return state;
    }
}