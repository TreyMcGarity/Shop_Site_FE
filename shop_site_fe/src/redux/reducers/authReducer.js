import {
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions/type';

const initialState = {
    loggedIn: false,
    cred_data: {},
    error: ""
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                cred_data: action.payload,
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                loggedIn: false,
                error: action.payload,
            };  
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                cred_data: action.payload,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loggedIn: false,
                error: action.payload,
            };           
        default:
            return state;
    }
};

export default authReducer;